import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import WeatherScreen from './src/screens/WeatherScreen'
import { Provider } from 'react-redux'
import store from './src/redux/Store/Store'
import AppNavigation from './src/navigation/AppNavigation'
import Settings from './src/components/Settings'
const App = () => {
  
  return (
    <Provider store={store}>
    <AppNavigation/>
    {/* <Settings/> */}
    </Provider>
  )
}

export default App