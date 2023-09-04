import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './styles'
import images from '../../assets/images/images'
import FetchData from '../../helpers/api'
import WeatherScreenTop from '../../components/WeatherScreenTop/WeatherScreenTop'
import WeatherScreenCenter from '../../components/WeatherScreenCenter/WeatherScreenCenter'
import WeatherScreenBottom from '../../components/WeatherScreenBottom/WeatherScreenBottom'
import SearchCity from '../../components/SearchCity/SearchCity'
import { selectWeatherData } from '../../redux/Selector/Selector'
import {LinearGradient} from 'expo-linear-gradient';
  import { useSelector } from 'react-redux'
import WeatherDayList from '../../components/WeatherDaysList/WeatherDayList'
const WeatherScreen = () => {
  const [weather, setweather] = useState()
  // const [Temp, setTemp] = useState()
  // const [celsius, setCelsius] = useState()
  // const [areaName, setAreaName] = useState()
  // const [weatherType,setWeatherType]=useState()
  // useEffect(() => {
  //   CheckWeather()
  // }, [])
  // const CheckWeather = async () => {
  //   try {
  //     const Info = await FetchData()
  //     setweather(Info)
  //     console.log(weather, "info")
  //     // console.log(res.data.weather[0].main)
  //     // setTemp(res.data.main.temp)
  //     // setAreaName(res.data.name)
  //     // const celsius = (Temp - 273.15) ;
  //     // const celsiusApprox=celsius.toFixed(2)
  //     // const weatherTypee=res.data.weather
  //     // setWeatherType(JSON.parse(weatherTypee))
  //     // setCelsius(celsiusApprox)
  //   }
  //   catch (error) {
  //     console.log(error, " error")
  //   }
  // }
  
 
    const Data = useSelector((state) => state.data.api);
    useEffect(() => {
      setweather(Data)
      // console.log(Data.data.city.name,"data show");
    }, [weather]);
  

  return (
    <LinearGradient
    colors={['#000000', '#ffffff',"#72C6D5"]}
    start={{ x: 0, y: 2.5}} // Gradient start point
    end={{ x: 0.3, y: 0.3 }}   // Gradient end point
    style={{ flex: 1, }}
>

      {weather && (
        <View style={styles.container}>
          <SearchCity/>
          <WeatherScreenTop />
          <WeatherScreenCenter/>
        <WeatherScreenBottom/>
        {/* <WeatherDayList/> */}
          {/* <View style={styles.top}>
            <Text style={styles.areaText}>{areaName}</Text>
          </View> */}
          {/* <View style={styles.center}>
            <Text>{Temp}</Text>
          </View> */}
          {/* <View style={styles.bottom}>
            <View>
              <Text style={{ fontSize: 10 }}>{celsius}</Text>
              </View>
            </View> */}
        </View>
      )}
    </LinearGradient>
  )
}

export default WeatherScreen