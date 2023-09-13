// import { View, Text, TouchableOpacity, TextInput } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { useDispatch,useSelector } from 'react-redux'
// import { city } from '../../redux/Action/Action'
// import FetchData from '../../helpers/api'
// const SearchCity = () => {
//     const [areaName, setAreaName] = useState()
//     const dispatch = useDispatch()
//     const cityName = useSelector((state) => state.data.data.city);
//     useEffect(() => {
//         CheckWeather()
//       }, [])
//       const CheckWeather = async () => {
//         try {
//           const Info = await FetchData()
//           // const Info= useSelector((state)=>state.data.data.weather)
//           setAreaName(Info.city.name)
//         }
//         catch (error) {
//           console.log(error, " error")
//         }
//       }
//     // const [cityNameInput, setCityNameInput] = useState()
//     const handleSearch = (() => {
//         dispatch(city(cityName))
//         console.log(cityName,"----city----");
//     })
//     return (
//         <View>
//             <TouchableOpacity onPress={(() => handleSearch())}>
//                 <TextInput
//                     style={{ borderWidth: 1, padding: 10 }}
//                     placeholder="Enter city name"
//                     value={cityName}
//                     onChangeText={(text) => dispatch(city(text))}
//                 />
//             </TouchableOpacity>
//         </View>
//     )
// }
// export default SearchCity
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { connect, useSelector } from 'react-redux';
import { celsius, city, fav } from '../../redux/Action/Action'
import { useDispatch } from 'react-redux';
import images from '../../assets/images/images';
import Color from '../../theme/Color';
import styles from './styles'
function SearchCity({ navigation }) {
    const [cityName, setCityName] = useState('');
    const dispatch = useDispatch()
    const celsiusRedux = useSelector((state) => state.data.celsiusIs)
    const handleSearch = () => {
        dispatch(city(cityName.toLowerCase()));
        dispatch(fav(false))
        navigation.navigate("WeatherScreen")
    };
    const handleBtn = (() => {
        console.log("okk");
        dispatch(celsius())
        // setData(celsiusRedux)
    })
    return (
        <View >
            <View style={{
                borderRadius: wp(2), flexDirection: 'row',
                paddingHorizontal: wp(3), backgroundColor: Color.mostLightPurple
            }}>
                <View>
                    <TouchableOpacity onPress={handleSearch}>
                        <Image source={images.search} style={{
                            height: wp(7), width: wp(7), marginHorizontal: wp(2),
                            alignItems: 'center', justifyContent: 'center', marginTop: wp(1)
                        }} />
                    </TouchableOpacity>
                </View>
                <View>
                        <TextInput style={{
                            color: Color.white,
                            width: wp(60), height: wp(8)
                        }}
                            placeholder="Search for a city"
                            placeholderTextColor={Color.white}
                            value={cityName}
                            onChangeText={setCityName}
                        />
                </View>
            </View>
            <View>

            </View>
            {/* <TouchableOpacity onPress={handleBtn}>
                <Image style={styles.tempPic} source={celsiusRedux ? images.fahrenheit : images.celsius} />
            </TouchableOpacity> */}
        </View>
    );
}

export default SearchCity;
