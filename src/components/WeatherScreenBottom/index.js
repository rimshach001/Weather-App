import { View } from 'react-native'
import React from 'react'
import styles from './styles'
import WeatherDayList from '../WeatherDaysList'
const WeatherScreenBottom = ({index}) => {
  
    return (
        <View style={styles.bottom}>
            <View style={{flex:1}}>
            <WeatherDayList propData={index}/>
            </View>
        </View>
    )
}

export default WeatherScreenBottom