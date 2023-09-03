import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import WeatherScreen from './src/screens/WeatherScreen/weatherScreen'
import { Provider } from 'react-redux'
import store from './src/redux/Store/Store'
const App = () => {
  
  return (
    <Provider store={store}>
    <WeatherScreen/>
    </Provider>
  )
}

export default App