import { View, Text, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './styles'
import images from '../../assets/images/images'
import Color from '../../theme/Color'
const WeatherDayList = ({propData}) => {
    const [data, setData] = useState()
    const [dailyWeather, setDailyWeather] = useState([]);
    const [todayWeather, setTodayWeather] = useState([]);
    const [todayDateString, setTodayDateString] = useState('');
    const today = new Date();
    const celsiusRedux = useSelector((state) => state.data.celsiusIs)
    const weatherData=propData
    const city = useSelector((state) => state.data.city)
    useEffect(() => {
        CheckWeather()
    }, [weatherData])
    useEffect(() => {
        // console.log("---days detailss----", dailyWeather?.data);
    }, [dailyWeather, todayWeather])
    const CheckWeather = async () => {
        try {
            setData(weatherData?.list)
            // console.log(weatherData?.list, "show lists");

            const Data1 = daysTimes(weatherData);
            setDailyWeather(Data1);

            setTodayDateString(today.toDateString());
            // console.log(dailyWeather);

            const TodayData = todayData(weatherData)
            setTodayWeather(TodayData)
            // console.log("---days details----", todayWeather)
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
        if (!days || !days.list || days.list.length === 0) {
            return {};
        }

        const allData = {};

        days.list.forEach((item) => {
            const date = new Date(dateForList(item.dt_txt));
            const dateString = date.toDateString();

            if (!allData[dateString]) {
                allData[dateString] = [];
            }
            allData[dateString].push(item);
        });

        return allData;
    };

    const todayData = (days) => {
        const allData = {};
        if (days?.list.length > 0) {
            days?.list.map((item) => {
                const date = new Date(item.dt_txt);
                const dateString = date.toDateString();
                if (todayDateString === dateString) {
                    if (!allData[dateString]) {
                        allData[dateString] = [];
                    }
                    allData[dateString]?.push(item);
                }
            });
            return allData;
        }
    };
    const timeOnly = ((item) => {
        const getTime = item;
        if (getTime !== undefined) {
            const timePart = getTime.slice(11, 16);
            return timePart;
        }
    })
    const dateForList = ((item) => {
        const getTime = item;
        if (getTime !== undefined) {
            const timePart = getTime.slice(0, 10);
            // console.log(item);
            // console.log(timePart, "day namee");
            return timePart;
        }
    })
    const renderItem = ({ item, index }) => (
        <View style={styles.renderitemsHourly}>
            <View style={{ flex: 0.5 }}>
                <Image style={styles.picsList}
                    source={item?.weather[0]?.main == 'Clear' ? images.clear
                        : item?.weather[0]?.main == 'Clouds' ? images.clouds
                            : item?.weather[0]?.main == 'Sunny' ? images.sunny
                                : item?.weather[0]?.main == 'Rain' ? images.rain : item?.weather[0]?.main}
                />
            </View>
            <View style={{ flex: 0.25, alignItems: 'center' }}>
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
    const dataArray = Object.entries(dailyWeather).map(([date, dataForDate]) => ({
        date,
        data: dataForDate[0],
    }));
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
                    />
                    :
                    <Text style={{ color: Color.white, alignItems: 'center', justifyContent: 'center' }}>Loading...</Text>
                }
                <Text style={{ fontSize: wp(5), color: 'white', marginLeft: wp(2), fontWeight: 'bold', marginTop: wp(2), }}>Weekly Forecast</Text>
            </View>
            <View style={styles.Forecast2}>
                {dailyWeather ?
                    <FlatList
                        vertical
                        showsVerticalScrollIndicator={false}
                        data={dataArray}
                        keyExtractor={(item) => item.date}
                        renderItem={({ item, index }) => {
                            const date = item.date;
                            const data = item.data;
                            return (
                                <View>
                                    <View style={styles.renderitemsWeekly}>
                                        <View style={{ flexDirection: 'column', flex: 0.6, marginLeft: wp(4) }}>
                                            <Text style={styles.dayNames}>{calculateDayOfWeek(data.dt)}</Text>
                                            <Text style={styles.weatherName}>{data?.weather[0]?.main}</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: 'column', flex: 0.2, borderRightWidth: wp(0.5), borderRightColor: Color.white
                                            , justifyContent: 'flex-end', alignItems: 'flex-end'
                                        }}>
                                            <Text style={styles.listText}>{celsiusRedux ? convertToCelsius(data.main.temp_max) : convertToFahrenheit(data.main.temp_max)}°   </Text>
                                            <Text style={styles.listText}>{celsiusRedux ? convertToCelsius(data.main.temp_min) : convertToFahrenheit(data.main.temp_min)}°   </Text>
                                        </View>
                                        <View style={{ flex: 0.2, marginLeft: wp(4) }}>
                                            <Image style={styles.picsListWeekly}
                                                source={data?.weather[0]?.main == 'Clear' ? images.clear
                                                    : data?.weather[0]?.main == 'Clouds' ? images.clouds
                                                        : data?.weather[0]?.main == 'Sunny' ? images.sunny
                                                            : data?.weather[0]?.main == 'Rain' ? images.rain : images.clouds}
                                            />
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                    />
                    :
                    <Text style={{ color: Color.white, alignItems: 'center', justifyContent: 'center' }}>Loading...</Text>
                }


            </View>
        </View>
    )
}

export default WeatherDayList