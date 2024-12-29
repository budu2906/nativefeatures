import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import PlacesList from '../components/places/PlacesList'
import { useIsFocused } from '@react-navigation/native'

const Allplaces = ({route, navigation}) => {
  const [loadedPlaces, setLoadedPlaces] = useState([])
  const isFocused = useIsFocused()

  useEffect(()=>{
    if(isFocused && route.params){
      setLoadedPlaces(prev=> [...prev, route.params.place])

    }


  },[isFocused, route])

  return (
    <>
    <PlacesList
    places={loadedPlaces} 
    />

    <Button title='add' onPress={()=>navigation.navigate('AddPlace')} />
    </>
  )
}

export default Allplaces