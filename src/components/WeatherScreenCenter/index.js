import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import images from '../../assets/images/images'
const WeatherScreenCenter = ({index}) => {
    const [weatherType, setWeatherType] = useState()
    const Data=index
    useEffect(() => {
        setWeatherType(Data?.list[0]?.weather[0]?.main)
        // console.log(Data?.list[0]?.weather[0]?.main, "--weather type--")
    }, [weatherType, Data]);

    return (
        <View style={styles.center}> 
        <View style={styles.box}>
            <View style={styles.boxes}>
                <View style={styles.boxesImg}>
                <Image source={images.humidity} style={styles.boxPic}/>
                </View>
                <View style={styles.boxesPart}>
                <Text style={styles.boxText}>Humidity</Text>
                <Text style={styles.boxText}>{Data?.list[0]?.main?.humidity}%</Text>
                </View>
            </View>
            <View style={styles.boxes}>
                <View style={styles.boxesImg}>
                <Image source={images.pressure} style={styles.boxPic}/>
                </View>
                <View style={styles.boxesPart}>
                <Text style={styles.boxText}>Pressure</Text>
                <Text style={styles.boxText}>{Data?.list[0]?.main?.pressure} hpa</Text>
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
                <Text style={styles.boxText}>{((Data?.list[0]?.wind?.speed)*3.6).toFixed(1)} km/h</Text>
                </View>
            </View>
            <View style={styles.boxes}>
                <View style={styles.boxesImg}>
                <Image source={images.visibility} style={styles.boxPic}/>
                </View>
                <View style={styles.boxesPart}>
                <Text style={styles.boxText}>Visibility</Text>
                <Text style={styles.boxText}>{(Data?.list[0]?.visibility)/1000} km</Text>
                </View>
            </View>
        </View>
        </View>
    )
}

export default WeatherScreenCenter