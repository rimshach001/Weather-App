import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import WeatherScreen from '../screens/WeatherScreen';
import Settings from '../components/Settings';
const stack = createStackNavigator();
const AppNavigation = () => {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName={WeatherScreen} >
                <stack.Screen name="WeatherScreen"
                    options={{
                        headerShown: false
                    }}
                    component={WeatherScreen} />
                <stack.Screen name="Settings"
                    options={{
                        headerShown: false
                    }}
                    component={Settings} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation