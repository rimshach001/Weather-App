import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import FetchData from '../../helpers/api'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './styles'
import images from '../../assets/images/images'
import Color from '../../theme/Color'
const WeatherDayList = () => {
    const [data, setData] = useState()
    const [WeatherType, setWeatherType] = useState()
    const [temp, setTemp] = useState([])
    const [selectedItem, setSelecetedItem] = useState()
    const [dailyWeather, setDailyWeather] = useState([]);
    const [todayWeather, setTodayWeather] = useState([]);

    const [todayDateString, setTodayDateString] = useState('');
    const today = new Date();
    const celsiusRedux = useSelector((state) => state.data.celsiusIs)
    const weatherData = useSelector((state) => state.data.api);
    const city = useSelector((state) => state.data.city)
    useEffect(() => {
        CheckWeather()
    }, [weatherData])
    useEffect(() => {
        console.log("---days detailss----", dailyWeather);
        //  console.log(dailyWeather["Fri Sep 08 2023"]);
    }, [dailyWeather,todayWeather])
    const CheckWeather = async () => {
        try {
            setData(weatherData?.data?.list)
            console.log(weatherData?.data?.list, "show lists");

            const Data1 = daysTimes(weatherData?.data);
            setDailyWeather(Data1);

            setTodayDateString(today.toDateString());
            console.log(dailyWeather);

            const TodayData = todayData(weatherData?.data)
            setTodayWeather(TodayData)
            console.log("---days details----",todayWeather)
        }
        catch (error) {
            console.log(error, " error")
        }
    }
    const convertToCelsius = (temp) => {
        const celsius = (temp - 273.15);
        const celsiusApprox = celsius.toFixed(0)
        return celsiusApprox
    }
    const convertToFahrenheit = (temp) => {
        const fahren = (temp - 273.15 * 0.55 + 32);
        const fahrenApprox = fahren.toFixed(0)
        return fahrenApprox
    }
    calculateDayOfWeek = (item) => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date(item * 1000);
        // console.log((date, "oooo"));
        const dayIndex = date.getDay();
        const dayOfWeek = daysOfWeek[dayIndex];
        return dayOfWeek
    };
    const daysTimes = (days) => {
        const info = days?.list
        const allData = [];
        // console.log(days?.list, "this is data in render list")
        if (days?.list.length > 0) {
            days.list.map((item) => {
                const date = new Date(item.dt_txt);
                const dateString = date.toDateString();
                console.log("------itemm------", item)
                if (!allData[date]) {
                    allData[date] = [];
                }
                allData[dateString]?.push(item);
            })
            console.log(allData, "yessData");
            return allData
        }


    };
    const todayData = (days) => {
        // if (!data || !Array.isArray(data)) {
        //     return {}; // Handle the case where data is undefined or not an array
        // }
        // else {
        const allData = {};
        if (days?.list.length > 0) {
            // const today = new Date(); 
            // const todayDateString = today.toDateString();
            days?.list.map((item) => {
                const date = new Date(item.dt_txt);
                const dateString = date.toDateString();
                // console.log(dateString,)
                if (todayDateString === dateString) {
                    if (!allData[dateString]) {
                        allData[dateString] = [];
                    }
                    allData[dateString]?.push(item);
                }
                // console.log(allData[dateString], "999")
            });
            // console.log(allData, "-------all-------")
            return allData;
        }
    };
    const timeOnly = ((item) => {
        const getTime = item;
        if (getTime !== undefined) {
            const timePart = getTime.slice(11, 16);
            // console.log(item);
            // console.log(timePart);
            return timePart;
        }

    })
    const onlyDayName = ((item) => {
        const getTime = item;
        if (getTime !== undefined) {
            const timePart = getTime.slice(0, 3);
            return timePart;
        }
        else {
            return getTime
        }
        // console.log(item);
        // console.log(timePart);
    })
    // Filter the data to get today's weather data
    // const todayData = dailyWeather[currentDate];
    // console.log(todayData,"----today----");

    // const today = data.filter(item => {
    //     const date = new Date.toDateString()
    //     console.log(item.dt_txt.include(date),"888");
    //     return item.dt_txt.include(date)
    // })
    const renderItem = ({ item, index }) => (
        <View style={styles.renderitemsHourly}>

            <View style={{ flex: 0.5 }}>
                <Image style={styles.picsList}
                    source={item?.weather[0]?.main == 'Clear' ? images.clear
                        : item?.weather[0]?.main == 'Clouds' ? images.clouds
                            : item?.weather[0]?.main == 'Sunny' ? images.sunny : item?.weather[0]?.main}
                />
            </View>
            <View style={{ flex: 0.25, alignItems: 'center' }}>
                {/* <Text style={styles.listTextDay}>
                    {calculateDayOfWeek(item.dt)}
                </Text> */}
                <Text style={styles.listTextTime}>
                    {timeOnly(item.dt_txt)}
                </Text>
            </View>
            <View style={{ flex: 0.25, flexDirection: 'row' }}>
                <Text style={styles.listText}>{celsiusRedux ? convertToCelsius(item.main.temp_max) : convertToFahrenheit(item.main.temp_max)}°/</Text>
                <Text style={styles.listText}>{celsiusRedux ? convertToCelsius(item.main.temp_min) : convertToFahrenheit(item.main.temp_min)}°</Text>
            </View>
        </View>
    )
    return (

        <View style={styles.bottom}>
            <View style={styles.Forecast1}>
                <Text style={{ fontSize: wp(5), color: 'white', marginLeft: wp(2), fontWeight: 'bold' }}>Hourly Forecast</Text>
                {todayWeather ?
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={todayWeather[todayDateString]}
                        renderItem=
                        {renderItem}
                    // {({ item }) => (
                    //     <Text style={{ fontSize: 20 }}>{item.weather[0].main}</Text>
                    // )}
                    />
                    :
                    <Text style={{ color: Color.white, alignItems: 'center' ,justifyContent:'center'}}>Loading...</Text>
                }
                <Text style={{ fontSize: wp(5), color: 'white', marginLeft: wp(2), fontWeight: 'bold', marginTop: wp(2), }}>Weekly Forecast</Text>
            </View>
            <View style={styles.Forecast2}>
                {dailyWeather ?
                    <FlatList
                        vertical
                        showsVerticalScrollIndicator={false}
                        data={dailyWeather["Mon Sep 11 2023"]}
                        // data={dailyWeather}
                        keyExtractor={(item) => item[0]}
                        renderItem={({ item, index }) => {
                            // console.log(item, "rendered data");
                            return (
                                <View>
                                    <View style={styles.renderitemsWeekly}>
                                        <View style={{ flexDirection: 'column', flex: 0.6, marginLeft: wp(4) }}>
                                            <Text style={styles.dayNames}>{calculateDayOfWeek(item.dt)}</Text>
                                            <Text style={styles.weatherName}>{item?.weather[0]?.main}</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: 'column', flex: 0.2, borderRightWidth: wp(0.5), borderRightColor: Color.white
                                            , justifyContent: 'flex-end', alignItems: 'flex-end'
                                        }}>
                                            <Text style={styles.listText}>{celsiusRedux ? convertToCelsius(item.main.temp_max) : convertToFahrenheit(item.main.temp_max)}°   </Text>
                                            <Text style={styles.listText}>{celsiusRedux ? convertToCelsius(item.main.temp_min) : convertToFahrenheit(item.main.temp_min)}°   </Text>
                                        </View>
                                        <View style={{ flex: 0.2, marginLeft: wp(1) }}>
                                            <Image style={styles.picsListWeekly}
                                                source={item?.weather[0]?.main == 'Clear' ? images.clear
                                                    : item?.weather[0]?.main == 'Clouds' ? images.clouds
                                                        : item?.weather[0]?.main == 'Sunny' ? images.sunny : images.clouds}
                                            />
                                        </View>
                                    </View>
                                    {/* <Text>{item}</Text> */}
                                </View>
                            )
                        }}
                    />
                    :
                    <Text style={{ color: Color.white, alignItems: 'center' ,justifyContent:'center'}}>Loading...</Text>
                }


            </View>
            {/* </View> */}
        </View>
    )
}

export default WeatherDayList