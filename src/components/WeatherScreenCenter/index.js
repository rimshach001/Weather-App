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
    // useEffect(() => {
    //     CheckWeather()
    // }, [weatherType])
    // const CheckWeather = async () => {
    //     try {
    //         const Info = await FetchData()
    //         // const Info= useSelector((state)=>state.data.data.weather)
    //         // console.log(Info);
    //         setWeatherType(Info.list[0].weather[0].main)
    //         console.log(Info.list[0].weather[0].main,"--")
    //         if (weatherType == 'Clear') {
    //             console.log(weatherType);
    //             setClearType(true)
    //         }
    //         else if (weatherType == 'Sunny') {
    //             setSunnyType(true)
    //         }
    //         else {
    //             console.log(weatherType);
    //         }
    //     }
    //     catch (error) {
    //         console.log(error, " error")
    //     }
    // }

    const Data = useSelector((state) => state.data.api);
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

    return (
        // <View style={styles.center}>
        //     <Image style={styles.pic} source={clearType ? images.clear : sunnyType ? images.sunny : images.clouds} />
        // </View>
        <View style={styles.center}> 
        <View style={styles.box}>
            <View style={styles.boxes}>
                <View style={styles.boxesImg}>
                <Image source={images.humidity} style={styles.boxPic}/>
                </View>
                <View style={styles.boxesPart}>
                <Text style={styles.boxText}>Humidity</Text>
                <Text style={styles.boxText}>{Data?.data?.list[0]?.main?.humidity}%</Text>
                </View>
            </View>
            <View style={styles.boxes}>
                <View style={styles.boxesImg}>
                <Image source={images.pressure} style={styles.boxPic}/>
                </View>
                <View style={styles.boxesPart}>
                <Text style={styles.boxText}>Pressure</Text>
                <Text style={styles.boxText}>{Data?.data?.list[0]?.main?.pressure} hpa</Text>
                </View>
            </View>
        </View>
        <View style={styles.box}>
        <View style={styles.boxes}>
                <View style={styles.boxesImg}>
                <Image source={images.wind} style={styles.boxPic}/>
                </View>
                <View style={styles.boxesPart}>
                <Text style={styles.boxText}>Wind Speed</Text>
                <Text style={styles.boxText}>{((Data?.data?.list[0]?.wind?.speed)*3.6).toFixed(1)} km/h</Text>
                </View>
            </View>
            <View style={styles.boxes}>
                <View style={styles.boxesImg}>
                <Image source={images.visibility} style={styles.boxPic}/>
                </View>
                <View style={styles.boxesPart}>
                <Text style={styles.boxText}>Visibility</Text>
                <Text style={styles.boxText}>{(Data?.data?.list[0]?.visibility)/1000} km</Text>
                </View>
            </View>
        </View>
        </View>
    )
}

export default WeatherScreenCenter