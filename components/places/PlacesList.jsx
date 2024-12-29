import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import PlaceItem from './PlaceItem'
import { Colors } from '../../constants/Colors'


const PlacesList = ({places}) => {



const handlePlaces = (itemData) =>{
  

    return <PlaceItem place={itemData.item}/>

    }

if(!places || places.length<=0) return <View style={styles.container}><Text style={styles.fallbackText}>there is no places :(</Text></View>




return (
  <FlatList
  data={places}
  keyExtractor={(item)=> item.id}
  renderItem={handlePlaces}
  
  />
)
}
export default PlacesList


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fallbackText:{
        fontSize: 16,
        color: Colors.primary200
    }
})