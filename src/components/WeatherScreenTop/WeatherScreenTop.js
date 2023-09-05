import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import FetchData from '../../helpers/api'
import styles from './styles'
import images from '../../assets/images/images'
import { useSelector, useDispatch } from 'react-redux'
import { celsius,City} from '../../redux/Action/Action'
const WeatherScreenTop = () => {
  const [weather, setweather] = useState()
  const [Temp, setTemp] = useState()
  // const [celsius, setCelsius] = useState()
  const [areaName, setAreaName] = useState()
  const [data, setData] = useState()
  const celsiusRedux = useSelector((state) => state.data.celsiusIs)
  console.log(celsiusRedux, "-----");
  // const fahrenheitRedux = useSelector((state) => state.data.data.fahrenheit)
  const dispatch = useDispatch()
  // const cityName = useSelector((state) => state.data.city)
  // console.log(cityName,"---------city-------");
  const Data = useSelector((state)=>state.data.api);
  useEffect(() => {
    CheckWeather()
  }, [areaName,Data])
  const CheckWeather = async () => {
    try {
      // const Info = await FetchData()
      setAreaName(Data?.data?.city?.name)
      // console.log(Data.data.list[0].weather[0].main,"data show");
    }
    catch (error) {
      console.log(error, "-- error")
    }
  }
  const handleBtn = (() => {
    console.log("okk");
    dispatch(celsius())
    // setData(celsiusRedux)
  })
  // setAreaName(Data.data.city.name)
  // useEffect(() => {
    
  //   console.log(weather);
  // }, [weather]);

  return (
    <View style={styles.top}>
      <View style={{ flex: 0.85}}>
        <Text style={styles.areaText}>{areaName}</Text>
      </View>
      <View style={{ flex: 0.15 }}>
        <TouchableOpacity onPress={handleBtn}>
          <Image style={styles.tempPic} source={celsiusRedux?images.fahrenheit:images.celsius} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default WeatherScreenTop