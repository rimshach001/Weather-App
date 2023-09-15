import { View, Text, FlatList, Image, TouchableHighlight, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles'
import images from '../../assets/images/images'
import Swipeout from 'react-native-swipeout'
import { city, delFavCity, fav, swipeList,curIndex } from '../../redux/Action/Action'

const FavCities = ({ navigation }) => {
  useEffect(() => {

  }, [favorite])
  
  const [openSwipeoutIndex, setOpenSwipeoutIndex] = useState(null);
  const [sunnyType, setSunnyType] = useState(false)
  const [clearType, setClearType] = useState(false)
  const favorite = useSelector((state) => state.data.favCities)
  const celsiusRedux = useSelector((state) => state.data.celsiusIs)
  const dispatch = useDispatch()
  // console.log(favorite, "data of fav citiesss")
  const Data = useSelector((state) => state.data.api);
  const convertCelsius = ((item) => {
     const get= item - 273.15
     const temp=get.toFixed(1)
    return temp
  })
  const convertToFahrenheit = (temp) => {
    const fahren = (temp - 273.15 * 0.55 + 32);
    const fahrenApprox = fahren.toFixed(0)
    return fahrenApprox
}
  const weatherImage = ((weatherType) => {
    if (weatherType === 'Clear') {
      return images.clear;
    } else if (weatherType === 'Sunny') {
      return images.sunny;
    }
    else if (weatherType === 'Rain') {
      return images.rain;
    }
    else {
      return images.clouds;
    }
  });
  const DotsBtn = (() => {

    if (Val == true) {
      setVal(false)
    }
    else {
      setVal(true)
    }
  })
  const handleBtn = ((item,index) => {
    dispatch(city(item.toLowerCase()));
    dispatch(swipeList(true))
    navigation.navigate("WeatherScreen")
    setOpenSwipeoutIndex(null)
    dispatch(curIndex(index))
  })
  const handleDeleteItem = ((item) => {
    dispatch(delFavCity(item))
    dispatch(fav(false))
    setOpenSwipeoutIndex(null)
    console.log("item deleted....");
  })
  const renderItem = ({ item, index }) => {

    const swipeBtns = [
      {
        text: 'Delete',
        backgroundColor: 'transparent',
        onPress: () => handleDeleteItem(index),
      },
    ];
    return (
      <Swipeout right={swipeBtns}
        autoClose={true}
        backgroundColor='transparent'
        onOpen={() => setOpenSwipeoutIndex(index)}
        close={openSwipeoutIndex !== index}>
        <TouchableOpacity onPress={() => handleBtn(item?.city?.name, index)}>
          <View style={styles.listItems} >
            <View style={styles.favList}>
              <Text style={styles.listCityName}>{item?.city?.name}</Text>
              <Text style={styles.listTemp}>{celsiusRedux ? convertCelsius(item?.list[0]?.main?.temp): convertToFahrenheit(item?.list[0]?.main?.temp)}° </Text>
              <Text style={styles.listweatherType}>{item?.list[0]?.weather[0]?.main}</Text>
            </View>
            <View style={{ flex: 0.4, alignItems:'center', justifyContent:'center' }}>
              <Image style={styles.pic} source={weatherImage(item?.list[0]?.weather[0]?.main)} />
            </View>
          </View>
        </TouchableOpacity>
      </Swipeout>
    )
  }
  return (
    <View style={{ height: '100%', width: '100%' }}>
      <FlatList
        style={styles.renderlist}
        data={favorite}
        renderItem={renderItem}
      // keyExtractor={item => item.id}
      />
    </View>
  )
}

export default FavCities