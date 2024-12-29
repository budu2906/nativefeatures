import React from 'react'
import NativeStack from './navigation/NativeStack'
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {GestureHandlerRootView} from "react-native-gesture-handler";

const App = () => {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <StatusBar style='dark'/>
            <NavigationContainer>
                <NativeStack/>
            </NavigationContainer>
        </GestureHandlerRootView>

    )
}

export default App
