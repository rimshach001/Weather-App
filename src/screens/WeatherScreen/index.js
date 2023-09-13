import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './styles'
import images from '../../assets/images/images'
import FetchData from '../../helpers/api'
import WeatherScreenTop from '../../components/WeatherScreenTop'
import WeatherScreenCenter from '../../components/WeatherScreenCenter'
import WeatherScreenBottom from '../../components/WeatherScreenBottom'
import SearchCity from '../../components/SearchCity'
import { selectWeatherData } from '../../redux/Selector/Selector'
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from 'react-redux'
import WeatherDayList from '../../components/WeatherDaysList'
import { city, weatherapi } from '../../redux/Action/Action'
import Color from '../../theme/Color'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
const WeatherScreen = (props) => {
  // const [weather, setweather] = useState()
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

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch({ type: 'City', payload: 'lahore' })
    dispatch(city("lahore"))
    // setweather(Data)
    console.log("heelo");
    // console.log(Data.data.city.name,"kk");
  }, []);


  return (
      <LinearGradient
        colors={[Color.white, Color.white, Color.lightpurple]}
        start={{ x: 0, y: 5 }}
        end={{ x: 0.1, y: 0.1 }}
        style={{ flex: 1, }}
      >

        {Data && (
          <View style={styles.container}>
            <WeatherScreenTop navigation={props.navigation} />
            <WeatherScreenCenter />
            <WeatherScreenBottom />
          </View>
        )}
      </LinearGradient>
  )
}

export default WeatherScreen