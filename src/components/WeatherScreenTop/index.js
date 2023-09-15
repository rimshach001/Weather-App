import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import images from '../../assets/images/images'
import { useSelector, useDispatch } from 'react-redux'
import { celsius, City, favCityname, fav, delFavCity, swipeList } from '../../redux/Action/Action'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { favBtn } from '../Functions/functions'
const WeatherScreenTop = ({ navigation, index }) => {
  const [weatherType, setWeatherType] = useState()
  const [areaName, setAreaName] = useState()
  const [RainType, setRainType] = useState()
  const [sunnyType, setSunnyType] = useState(false)
  const [clearType, setClearType] = useState(false)
  const [celsiuss, setCelsius] = useState()
  const [fahrenheit, setfahrenheit] = useState()
  const celsiusRedux = useSelector((state) => state.data.celsiusIs)
  const FavIs = useSelector((state) => state.data.favorite)
  const Data = index
  
  const dispatch = useDispatch()
  const ApiData = useSelector((state) => state.data.api);
  const FavData = useSelector((state) => state.data.favCities);
  const Swipedata = useSelector((state) => state.data.swipe);
  const isCityFavorite = FavData.some((city) => city.city.id === ApiData?.data?.city?.id);
  useEffect(() => {
    CheckWeather()
  }, [areaName, ApiData, FavIs, , Data])
  const CheckWeather = async () => {
    try {
      setAreaName(Data?.city?.name)
      setWeatherType(Data?.list[0]?.weather[0]?.main)

      const celsius = (Data?.list[0]?.main?.temp - 273.15);
      const celsiusApprox = celsius.toFixed(0)
      setCelsius(celsiusApprox)

      const fahren = (Data?.list[0]?.main?.temp - 273.15 * 0.55 + 32);
      const fahrenApprox = fahren.toFixed(0)
      setfahrenheit(fahrenApprox)

    }
    catch (error) {
      console.log(error, "-- error")
    }
  }
  useEffect(() => {
    setWeatherType(Data?.list[0]?.weather[0]?.main)
    if (weatherType == 'Clear') {
      console.log(weatherType);
      setClearType(true)
    }
    else if (weatherType == 'Sunny') {
      setSunnyType(true)
    }
    else if (weatherType == 'Rain') {
      setRainType(true)
    }
    else {
      console.log(weatherType);
    }
  }, [weatherType, Data]);

  const favBtn = (() => {
    dispatch(favCityname(Data))
    dispatch(fav())
    // navigation.navigate("settings")
    dispatch(swipeList(true))
  })
  // const favBtn1 = (() => {
  //   dispatch(delFavCity(Data))
  //   dispatch(fav(false))
  //   console.log("-----ok---")
  // })
  return (
    <View style={styles.top}>
      <View style={{ flex: 0.3, flexDirection: 'row',}}>
        {Swipedata == false && (
          <View style={{flex:1,flexDirection:'row',marginTop:wp(3)}}>
            <View style={{ flex: 0.5 }} >
              {(FavIs == false && isCityFavorite == false) ? (
                <TouchableOpacity onPress={favBtn}>
                  {/* <Image style={styles.fav} source={images.favorite} /> */}
                  <Text style={styles.addText}>ADD</Text>
                </TouchableOpacity>
              ) : (
                <View></View>
                // <TouchableOpacity onPress={favBtn1}>
                //   {/* <Image style={styles.fav} source={images.favRed} /> */}
                //   <Text style={styles.addText}>ADDED</Text>
                // </TouchableOpacity>
              )
              }
            </View>
            <View style={{ flex: 0.5,}} >
              <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                {/* <Image style={styles.dots} source={images.settings} /> */}
                <Text style={styles.cancelText}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {Swipedata == true && (
          <View style={{flex:1, alignItems:'flex-end',justifyContent:'center'}}>
              <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Image style={styles.dots} source={images.settings} />
              </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={{ flex: 0.7, flexDirection: 'row'}}>
        <View style={{ flex: 0.65, flexDirection: 'column', marginLeft: 6, }}>
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <Text style={styles.areaText}>{areaName}</Text>
            </ScrollView>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.tempText}>{celsiusRedux ? celsiuss : fahrenheit}°</Text>
            <Text style={styles.tempTypeText}>{weatherType}</Text>
          </View>
        </View>
        <View style={{ flex: 0.35, }}>
          <Image style={styles.pic} source={clearType ? images.clear : sunnyType ? images.sunny : RainType ? images.rain : images.clouds} />
        </View>
      </View>
    </View>
  )
}
export default WeatherScreenTop
