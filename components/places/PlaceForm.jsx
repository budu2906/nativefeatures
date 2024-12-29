import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Colors } from '../../constants/Colors'
import ImagePicker from './ImagePicker'
import LocationPicker from './LocationPicker'
import RegularButton from '../UI/RegularButton'
import { Place } from '../../models/place'

const PlaceForm = ({onCreatePlace}) => {
    const [enteredTitle, setEnteredTitle] = useState()
    const [pickedLocation, setPickedLocation] = useState()
    const [selectedImage, setSelectedImage] =useState()

    const changeTitleHandler = (enteredText)=>{
        setEnteredTitle(enteredText)

    }

    const takeImageHandler =(image)=>{
        setSelectedImage(image)

    }
    const pickLocationHandler = useCallback((location)=>{
        setPickedLocation(location)
    })

    const savePlaceHandler = () =>{
        
        const placeData = new Place(enteredTitle, selectedImage, pickedLocation)
        console.log(placeData.imageUri)
        // onCreatePlace(placeData)
   

    }
  return (
    <ScrollView style={styles.form}>
        <View>
            <Text style={styles.label}>
                Title
            </Text>
            <TextInput style={styles.input} value={enteredTitle} onChangeText={changeTitleHandler}/>
        </View>
        <ImagePicker onImageTaken={takeImageHandler}/>
        <LocationPicker onLocationTaken={pickLocationHandler}/>
        <RegularButton onPress={savePlaceHandler}>Add Place</RegularButton>
    </ScrollView>
  )
}

export default PlaceForm


const styles = StyleSheet.create({
    form:{
        flex: 1,
        padding: 24

    },
    label:{
        fontWeight: 'bold',
        marginBottom: 4,
        color: Colors.primary500

    },
    input:{
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical:8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100
    }
})