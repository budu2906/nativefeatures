import { View, Text, Alert, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { launchCameraAsync, PermissionStatus, useCameraPermissions } from 'expo-image-picker'
import { Colors } from '../../constants/Colors'
import Button from '../UI/Button'

const ImagePicker = ({onImageTaken}) => {
const [cameraPermissionInformation, requestPermission] = useCameraPermissions()
const [imageUri, setImageUri] = useState()


    const verifyPermissions = async () =>{
        if(cameraPermissionInformation.status=== PermissionStatus.UNDETERMINED){
           const res = await requestPermission()

           return res.granted
        }
        if(cameraPermissionInformation.status === PermissionStatus.DENIED) {

            Alert.alert('Insufficient permission', 'you need to grant camera permission to use this app')
            return false
        }

        return true

    }

    const takeImageHandler = async () =>{
         const hasPermission = await verifyPermissions()
         if(!hasPermission) return
         
         const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.5,
          })

          console.log(image)
          setImageUri(image.uri)
          onImageTaken(image.uri)
         
       
    }



 let img = <Text>no image picked</Text>
 if(imageUri) img= <Image style={styles.image} source={{uri: imageUri}}/>

  return (
    <View>
        <View style={styles.imagePreview}>
          {img}
        </View>
    
        <Button icon='camera' onPress={takeImageHandler}>Take Image</Button>
    </View>

  )
}

export default ImagePicker



const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },
    image:{
        minHeight: 200,
        minWidth: 200,
        width: '100%',
        height: '100%'
    }
})