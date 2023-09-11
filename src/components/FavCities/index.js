import { View, Text, FlatList, Image, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles'
import images from '../../assets/images/images'
import Swipeout from 'react-native-swipeout'
import { delFavCity, fav } from '../../redux/Action/Action'

const FavCities = () => {
  useEffect(()=>{

  },[favorite])
  const [sunnyType, setSunnyType] = useState(false)
  const [clearType, setClearType] = useState(false)
  const favorite = useSelector((state) => state.data.favCities)
  const celsiusRedux = useSelector((state) => state.data.celsiusIs)
  const dispatch = useDispatch()
  console.log(favorite, "data of fav citiesss")
  const Data = useSelector((state) => state.data.api);
  const convertCelsius = ((item) => {
    return item - 273.15
  })
  const weatherImage = ((weatherType) => {
    if (weatherType === 'Clear') {
      return images.clear;
    } else if (weatherType === 'Sunny') {
      return images.sunny;
    } else {
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
  const handleDeleteItem = ((item) => {
    dispatch(delFavCity(item))
    dispatch(fav(false))
    console.log("item deleted....");
  })
  const renderItem = ({ item, index }) => {

    const swipeBtns = [
      {
        text: 'Delete',
        backgroundColor: 'red', // Customize the button color
        onPress: () => handleDeleteItem(index), // Add your delete item logic here
      },
    ];
    return (
      <Swipeout right={swipeBtns}
        autoClose={true}
        backgroundColor='transparent'>
        <View style={styles.listItems} >
          <View style={{ flex: 0.6, flexDirection: 'column' }}>
            <Text style={styles.listCityName}>{item?.city?.name}</Text>
            <Text style={styles.listTemp}>{convertCelsius(item?.list[0]?.main?.temp).toFixed(1)}°C</Text>
            <Text style={styles.listweatherType}>{item?.list[0]?.weather[0]?.main}</Text>
          </View>
          <View style={{ flex: 0.4 }}>
            <Image style={styles.pic} source={weatherImage(item?.list[0]?.weather[0]?.main)} />
          </View>
        </View>
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