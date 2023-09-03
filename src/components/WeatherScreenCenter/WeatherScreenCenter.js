import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import FetchData from '../../helpers/api'
import images from '../../assets/images/images'
import { useSelector } from 'react-redux'
const WeatherScreenCenter = () => {
    const [weather, setweather] = useState()
    const [Temp, setTemp] = useState()
    const [sunnyType, setSunnyType] = useState(false)
    const [clearType, setClearType] = useState(false)
    const [weatherType, setWeatherType] = useState()
    useEffect(() => {
        CheckWeather()
    }, [weatherType])
    const CheckWeather = async () => {
        try {
            const Info = await FetchData()
            // const Info= useSelector((state)=>state.data.data.weather)
            // console.log(Info);
            setWeatherType(Info.list[0].weather[0].main)
            console.log(Info.list[0].weather[0].main,"--")
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
        }
        catch (error) {
            console.log(error, " error")
        }
    }
    return (
        <View style={styles.center}>
            <Image style={styles.pic} source={clearType ? images.clear : sunnyType ? images.sunny : images.clouds} />
        </View>
    )
}

export default WeatherScreenCenter