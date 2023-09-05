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
const WeatherDayList = () => {
    const [data, setData] = useState()
    const [WeatherType, setWeatherType] = useState()
    const [selectedItem, setSelecetedItem] = useState()
    const [dailyWeather, setDailyWeather] = useState([]);
    const [todayWeather, setTodayWeather] = useState([]);
    const today = new Date();
    const todayDateString = today.toDateString();
    const celsiusRedux = useSelector((state) => state.data.celsiusIs)
    const Data = useSelector((state) => state.data.api);
    useEffect(() => {
        CheckWeather()
    }, [Data,data,dailyWeather,todayWeather])
    
    const CheckWeather = async () => {
        try {
            // const Info = await FetchData()
            // const Info= useSelector((state)=>state.data.data.weather)
            setData(Data?.data?.list)
            console.log(Data?.data?.list, "show lists");

            const Data1 = daysTimes(Data?.data?.list);
            // console.log(Data, "---details----");
            setDailyWeather(Data1);

            const TodayData = todayData(Data?.data?.list)
            setTodayWeather(TodayData)
            // console.log(todayData(Info.list), "aj kaaaa")
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
    const daysTimes = (data) => {
        const allData = {};
        data.forEach((item) => {
            const date = new Date(item.dt_txt);
            const dateString = date.toDateString();
            // console.log(dateString,)
            if (!allData[dateString]) {
                allData[dateString] = [];
            }
            // console.log(allData[dateString], "999")
            allData[dateString].push(item);
        });
        // if(new Date()==date){
        //     setTodayWeather(allData[])
        // }
        // console.log(allData,"-------all-------")
        return allData;
    };
    const todayData = (data) => {
        const allData = {};
        // const today = new Date(); 
        // const todayDateString = today.toDateString();
        data.forEach((item) => {
            const date = new Date(item.dt_txt);
            const dateString = date.toDateString();
            // console.log(dateString,)
            if (todayDateString === dateString) {
                if (!allData[dateString]) {
                    allData[dateString] = [];
                }
                allData[dateString].push(item);
            }
            // console.log(allData[dateString], "999")
        });
        // console.log(allData, "-------all-------")
        return allData;
    };
    const timeOnly = ((item) => {
        const getTime = item;
        const timePart = getTime.slice(11, 16);
        // console.log(item);
        // console.log(timePart);
        return timePart;

    })
    const onlyDayName = ((item) => {
        const getTime = item;
        const timePart = getTime.slice(0, 3);
        // console.log(item);
        // console.log(timePart);
        return timePart;
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

        <View style={styles.renderitems}>

            <View style={{ flex: 0.5 }}>
                <Image style={styles.picsList}
                    source={data[index]?.weather[0]?.main == 'Clear' ? images.clear
                        : data[index]?.weather[0]?.main == 'Clouds' ? images.clouds
                            : data[index]?.weather[0]?.main == 'Sunny' ? images.sunny : data[index]?.weather[0]?.main}
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

        <View>
            <Text style={{fontSize:wp(5), color:'white', marginLeft:wp(2), fontWeight:'bold'}}>Today</Text>
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
            <Text style={{fontSize:wp(5), color:'white', marginLeft:wp(2), fontWeight:'bold', marginTop:wp(2)}}>Weekly Forcast</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={Object.entries(dailyWeather)}
                keyExtractor={(item) => item[0]}
                renderItem={({ item, index }) => (
                    <View
                    // style={styles.renderitems}
                    >
                        <TouchableOpacity style={styles.renderitems} 
                        // onPress={() => setSelecetedItem(item)}
                        >
                            <Image style={styles.picsList}
                                source={data[index]?.weather[0]?.main == 'Clear' ? images.clear
                                    : data[index]?.weather[0]?.main == 'Clouds' ? images.clouds
                                        : data[index]?.weather[0]?.main == 'Sunny' ? images.sunny : images.sunny}
                            />
                            <Text style={styles.dayNames}>{onlyDayName(item[0])}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listText}>{celsiusRedux ? convertToCelsius(data[index].main.temp_max) : convertToFahrenheit(data[index].main.temp_max)}°/</Text>
                                <Text style={styles.listText}>{celsiusRedux ? convertToCelsius(data[index].main.temp_min) : convertToFahrenheit(data[index].main.temp_min)}°</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                )}
            />



        </View>
    )
}

export default WeatherDayList