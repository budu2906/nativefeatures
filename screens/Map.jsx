import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import MapView, {Marker} from 'react-native-maps'
import IconButton from '../components/UI/IconButton'
const Map = ({navigation}) => {

const [selectedLocation, setSelectedLocation] =useState()

const region  = {
    latitude: 37.38,
    longitude: -122.43,
    latitudeDelta: 0.0922 ,
    longitudeDelta:  0.0421
}

const selectLocationHandler = (event) =>{
    console.log(event)
    const lat = event.nativeEvent.coordinate.latitude
    const lng = event.nativeEvent.coordinate.longitude
    setSelectedLocation({lat: lat, lng: lng})

}


const  savePickedLocatioHandler = useCallback( () =>{
    if(!selectedLocation){
        Alert.alert('No location picked', 'you have to pick location by tapping on map first')
        return
    }

    navigation.navigate('AddPlace',{
        pickedLat: selectedLocation.lat,
        pickedLng: selectedLocation.lng
    })

},[navigation, selectedLocation])

useLayoutEffect(()=>{
navigation.setOptions({
    headerRight: ({tintColor})=> <IconButton icon='save' size={24} color={tintColor} onPress={savePickedLocatioHandler}/>
})
},[navigation, savePickedLocatioHandler])

    return (

    <MapView onPress={selectLocationHandler} style={styles.map} initialRegion={region}>
        {selectedLocation &&<Marker title='Picked Location' coordinate={{latitude: selectedLocation.lat, longitude: selectedLocation.lng}}/>}
    </MapView>
  )
}

export default Map



const styles = StyleSheet.create({
    map: {
        flex: 1
    }
})