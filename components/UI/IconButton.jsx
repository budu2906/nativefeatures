import {StyleSheet} from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import {TouchableOpacity} from "react-native-gesture-handler";

const IconButton = ({icon, size, color, onPress}) => {
    return (
        <TouchableOpacity
            style={styles.button}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={onPress}>
            <Ionicons name={icon} size={size} color={color}/>
        </TouchableOpacity>
    )
}

export default IconButton


const styles = StyleSheet.create({
    button: {
        padding: 8,
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressed: {
        opacity: 0.7
    }
})
