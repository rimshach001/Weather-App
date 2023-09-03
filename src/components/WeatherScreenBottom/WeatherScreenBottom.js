import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import FetchData from '../../helpers/api'
import { useSelector, useDispatch } from 'react-redux'
import WeatherDayList from '../WeatherDaysList/WeatherDayList'
const WeatherScreenBottom = () => {
    const [weather, setweather] = useState()
    const [Temp, setTemp] = useState()
    const [celsius, setCelsius] = useState()
    const [celsiusMax, setCelsiusMax] = useState()
    const [celsiusMin, setCelsiusMin] = useState()
    const [fahrenheit, setfahrenheit] = useState()
    const [fahrenheitMax, setfahrenheitMax] = useState()
    const [fahrenheitMin, setfahrenheitMin] = useState()
    const [weatherType, setWeatherType] = useState()
    
  const celsiusRedux = useSelector((state) => state.data.celsiusIs)
    useEffect(() => {
        CheckWeather()
    }, [])
    const CheckWeather = async () => {
        try {
            const Info = await FetchData()
            // const Info= useSelector((state)=>state.data.data.weather)
            setWeatherType(Info.list[0].weather[0].main)
            const celsiusMax = (Info.list[0].main.temp_max - 273.15);
            const celsiusMaxApprox = celsiusMax.toFixed(0)
            setCelsiusMax(celsiusMaxApprox)

            const celsiusMin = (Info.list[0].main.temp_min - 273.15);
            const celsiusMinApprox = celsiusMin.toFixed(0)
            setCelsiusMin(celsiusMinApprox)

            const celsius = (Info.list[0].main.temp - 273.15);
            const celsiusApprox = celsius.toFixed(0)
            setCelsius(celsiusApprox)

            const fahrenMax = (Info.list[0].main.temp_max - 273.15 *0.55 +32);
            const fahrenMaxApprox = fahrenMax.toFixed(0)
            setfahrenheitMax(fahrenMaxApprox)

            const fahrenMin = (Info.list[0].main.temp_min - 273.15 *0.55 +32);
            const fahrenMinApprox = fahrenMin.toFixed(0)
            setfahrenheitMin(fahrenMinApprox)

            const fahren = (Info.list[0].main.temp - 273.15 *0.55 +32);
            const fahrenApprox = fahren.toFixed(0)
            setfahrenheit(fahrenApprox)
        }
        catch (error) {
            console.log(error, " error")
        }
    }
  
    return (
        <View style={styles.bottom}>
            <View style={{flex:0.2,flexDirection:'row'}}>
                <View style={{flex:0.7, flexDirection:'row'}}>
                <Text style={styles.tempText}>{celsiusRedux?celsius:fahrenheit}°</Text>
                <Text style={styles.tempTypeText}>{weatherType}</Text>
                </View>
                <View style={{flex:0.3,flexDirection:'row'}}>
                <Text style={styles.tempMinMaxText}>{celsiusRedux?celsiusMax:fahrenheitMax}°/</Text>
                <Text style={styles.tempMinMaxText}>{celsiusRedux?celsiusMin:fahrenheitMin}°</Text>
                </View>
            </View>
            <View style={{flex:0.8}}>
            <WeatherDayList/>
            </View>
            
        </View>
    )
}

export default WeatherScreenBottom