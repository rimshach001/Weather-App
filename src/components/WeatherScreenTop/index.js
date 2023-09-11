import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import FetchData from '../../helpers/api'
import styles from './styles'
import images from '../../assets/images/images'
import { useSelector, useDispatch } from 'react-redux'
import { celsius, City, favCityname, fav,delFavCity } from '../../redux/Action/Action'
const WeatherScreenTop = ({ navigation }) => {
  const [weatherType, setWeatherType] = useState()
  const [Temp, setTemp] = useState()
  // const [celsius, setCelsius] = useState()
  const [areaName, setAreaName] = useState()
  const [data, setData] = useState()
  const [Val, setVal] = useState(false)
  const [sunnyType, setSunnyType] = useState(false)
  const [clearType, setClearType] = useState(false)
  // console.log(props.navigation,"propsss");
  // -------------
  const [celsiuss, setCelsius] = useState()
  const [fahrenheit, setfahrenheit] = useState()
  const [celsiusMax, setCelsiusMax] = useState()
  const [celsiusMin, setCelsiusMin] = useState()
  const [fahrenheitMax, setfahrenheitMax] = useState()
  const [fahrenheitMin, setfahrenheitMin] = useState()
  const celsiusRedux = useSelector((state) => state.data.celsiusIs)
  const FavIs = useSelector((state) => state.data.favorite)

  console.log(FavIs, "---fav--");
  // const fahrenheitRedux = useSelector((state) => state.data.data.fahrenheit)
  const dispatch = useDispatch()
  // const cityName = useSelector((state) => state.data.city)
  // console.log(cityName,"---------city-------");
  const Data = useSelector((state) => state.data.api);
  useEffect(() => {
    CheckWeather()
  }, [areaName, Data,FavIs])
  const CheckWeather = async () => {
    try {
      // const Info = await FetchData()
      setAreaName(Data?.data?.city?.name)
      // console.log(Data, "data show");

      setWeatherType(Data?.data?.list[0]?.weather[0]?.main)
      console.log(weatherType, "now types");

      const celsius = (Data?.data?.list[0]?.main?.temp - 273.15);
      const celsiusApprox = celsius.toFixed(0)
      setCelsius(celsiusApprox)

      const fahren = (Data?.data?.list[0]?.main?.temp - 273.15 * 0.55 + 32);
      const fahrenApprox = fahren.toFixed(0)
      setfahrenheit(fahrenApprox)

      const celsiusMax = (Data?.data?.list[0]?.main?.temp_max - 273.15);
      const celsiusMaxApprox = celsiusMax.toFixed(0)
      setCelsiusMax(celsiusMaxApprox)

      const celsiusMin = (Data?.data?.list[0]?.main?.temp_min - 273.15);
      const celsiusMinApprox = celsiusMin.toFixed(0)
      setCelsiusMin(celsiusMinApprox)

      const fahrenMax = (Data?.data?.list[0]?.main?.temp_max - 273.15 * 0.55 + 32);
      const fahrenMaxApprox = fahrenMax.toFixed(0)
      setfahrenheitMax(fahrenMaxApprox)

      const fahrenMin = (Data?.data?.list[0]?.main?.temp_min - 273.15 * 0.55 + 32);
      const fahrenMinApprox = fahrenMin.toFixed(0)
      setfahrenheitMin(fahrenMinApprox)

    }
    catch (error) {
      console.log(error, "-- error")
    }
  }
  useEffect(() => {
    // console.log("ppp", Data?.data?.list[0]?.weather[0]?.main);
    setWeatherType(Data?.data?.list[0]?.weather[0]?.main)
    console.log(Data?.data?.list[0]?.weather[0]?.main, "--weather type--")
    if (weatherType == 'Clear') {
      console.log(weatherType);
      setClearType(true)
    }
    else if (weatherType == 'Sunny') {
      setSunnyType(true)
    }
    else {
      console.log(weatherType);
    }
  }, [weatherType, Data]);
  const DotsBtn = (() => {

    if (Val == true) {
      setVal(false)
    }
    else {
      setVal(true)
    }
    // setData(celsiusRedux)
  })
  const favBtn = (() => {
    // if (FavIs == false) {
      dispatch(favCityname(Data?.data))
      dispatch(fav())
    // }
    // else {
    //   dispatch(delFavCity(Data?.data))
    //   dispatch(fav(false))
    // }
    // console.log(Data?.data?.city.name, "dipatch");
  })
  const favBtn1 = (() => {
    // dispatch(favCityname(Data?.data))
    // dispatch(favCityname(Data?.data))
    dispatch(delFavCity(Data?.data))
    dispatch(fav(false))
    console.log("-----ok---")
  })
  return (
    <View style={styles.top}>

      <View style={{ flex: 0.2, flexDirection: 'row', }}>
        {FavIs == false ? (
          <TouchableOpacity onPress={favBtn}>
            <Image style={styles.fav} source={images.favorite} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={favBtn1}>
            <Image style={styles.fav} source={images.favRed} />
          </TouchableOpacity>
        )

        }
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image style={styles.dots} source={images.settings} />
        </TouchableOpacity>
        {/* {
          Val == true &&
          (<View style={styles.modal}>
            <TouchableOpacity
              //  onPress={()=>{navigation.navigate("Settings")}}
              onPress={() => navigation.navigate('Settings')}
            >
              <Text>Setting</Text>
            </TouchableOpacity>
          </View>)
        } */}

      </View>
      <View style={{ flex: 0.8, flexDirection: 'row', }}>
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
          {/* <View style={{  flexDirection: 'row' }}>
          <Text style={styles.tempMinMaxText}>{celsiusRedux ? celsiusMax : fahrenheitMax}°/</Text>
          <Text style={styles.tempMinMaxText}>{celsiusRedux ? celsiusMin : fahrenheitMin}°</Text>
        </View> */}
        </View>
        {/* <View style={{flex:0.2, }}>
      <TouchableOpacity onPress={handleBtn}>
          <Image style={styles.tempPic} source={celsiusRedux?images.fahrenheit:images.celsius} />
        </TouchableOpacity> 
      </View> */}
        <View style={{ flex: 0.35, }}>

          {/* <View style={styles.center}> */}
          <Image style={styles.pic} source={clearType ? images.clear : sunnyType ? images.sunny : images.clouds} />
          {/* </View> */}
          {/* <TouchableOpacity onPress={handleBtn}>
          <Image style={styles.tempPic} source={celsiusRedux?images.fahrenheit:images.celsius} />
        </TouchableOpacity>  */}
        </View>
      </View>
    </View>
  )
}
export default WeatherScreenTop