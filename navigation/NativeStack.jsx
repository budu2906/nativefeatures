import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Allplaces from '../screens/Allplaces'
import AddPlaces from '../screens/AddPlaces'
import Map from '../screens/Map'
import PlaceDetails from '../screens/PlaceDetails'
import IconButton from '../components/UI/IconButton'
import {Colors} from '../constants/Colors'
import {useNavigation} from "@react-navigation/native";

const Stack = createNativeStackNavigator()

const NativeStack = () => {

    const {navigate} = useNavigation()
    const onPressAddLocation = () => {
        console.log('onPressAddLocation')
        navigate('AddPlace');
    }

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: Colors.primary500},
                headerTintColor: Colors.gray700,
                contentStyle: {backgroundColor: Colors.gray700}
            }}
        >
            <Stack.Screen name='AllPlaces' component={Allplaces}
                          options={({navigation}) => ({
                              title: 'Your favorite places',
                              headerRight: ({tintColor}) => <IconButton icon='add' color={tintColor} size={24}
                                                                        onPress={onPressAddLocation}/>
                          })}
            />
            <Stack.Screen name='AddPlace' component={AddPlaces}
                          options={{
                              title: 'Add New Place'
                          }}

            />
            <Stack.Screen name='Map' component={Map}/>
            <Stack.Screen name='PlaceDetails' component={PlaceDetails}/>
        </Stack.Navigator>
    )
}

export default NativeStack
