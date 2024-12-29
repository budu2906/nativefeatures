import { View, Text } from 'react-native'
import React from 'react'
import PlaceForm from '../components/places/PlaceForm'

const AddPlaces = ({navigation}) => {
  const createPlaceHandler = (place) =>{
    navigation.navigate('AllPlaces',{
      place
    })

  }
  return (
    <PlaceForm onCreatePlace={createPlaceHandler}/>
  )
}

export default AddPlaces