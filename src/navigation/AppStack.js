import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Rovers from '../screens/Rovers'
import Rover from '../screens/Rover'

const Stack = createNativeStackNavigator()

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Rovers} name="Rovers" />
      <Stack.Screen component={Rover} name="Rover" />
    </Stack.Navigator>
  )
}

export default AppStack
