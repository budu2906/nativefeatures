import { View, Text, StyleSheet, Alert, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from '../UI/Button'
import { Colors } from '../../constants/Colors'
import { getCurrentPositionAsync, PermissionStatus, useForegroundPermissions } from 'expo-location'
import {  useIsFocused, useNavigation, useRoute } from '@react-navigation/native'
import { getAddress, getMapPreview } from '../../util/location'

const LocationPicker = ({onLocationTaken}) => {
    const API_KEY = 'AIzaSyDmOAobCh0ZtdaXGAPxSqcYgUtmZj4boa0'
    const navigation = useNavigation()
    const route = useRoute()
    const [pickedLocation, setPickedLocation] = useState()
    const isFocused = useIsFocused()

    const [locationPermissionInformation, requestPermission] =useForegroundPermissions()


   

    useEffect(()=>{
        if(route.params && isFocused){
            const mapPickedLocation = {lat: route.params.pickedLat, lng: route.params.pickedLng} 

            setPickedLocation(mapPickedLocation)
        }
      
        
    },[route,isFocused])

    useEffect(()=>{
        const handleLocation = async() =>{

            if(pickedLocation){
              const address = await getAddress(pickedLocation.lat, pickedLocation.lng)
                onLocationTaken({...pickedLocation, address})
            }
        }

        handleLocation()

    },[onLocationTaken, pickedLocation])


    const verifyPermissions = async() =>{
        if(locationPermissionInformation.status === PermissionStatus.UNDETERMINED){
            const permissionResponse = await requestPermission()
            return permissionResponse.granted
        }

        if(locationPermissionInformation.status===PermissionStatus.DENIED) {
            Alert.alert('permission error', 'app needs to be granted access to location permission')
            return false
        }

        return true


    }

    const pickOnMapHandler = async() =>{
        navigation.navigate('Map')
        



    }
    const getLocationHandler = async() =>{
        const hasPermission = await verifyPermissions()
        if(!hasPermission) return
        const location = await getCurrentPositionAsync()
        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })
        console.log(pickedLocation)
    }

    let locationText = <Text>No Location Picked</Text>

    if(pickedLocation) locationText = <><Text>lat: {pickedLocation.lat}</Text><Text>lng: {pickedLocation.lng}</Text></>

  return (
    <View>
      <View style={styles.mapPreview}>
        {/* {locationText} */}
       {pickedLocation &&  <Image style={styles.image} source={{uri: getMapPreview(pickedLocation.lat, pickedLocation.lng)}}/>}
      </View>
      <View style={styles.actions}>
        <Button onPress={getLocationHandler} icon='location'>Locate User</Button>
        <Button onPress={pickOnMapHandler} icon='map'>Pick on Map</Button>
      </View>
    </View>
  )
}

export default LocationPicker



const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4

    },
    actions:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        
        alignItems: 'center'

    },
    image:{
        width: '100%',
        height: '100%'
    }
})