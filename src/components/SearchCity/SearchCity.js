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
import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { city } from '../../redux/Action/Action'
import { useDispatch } from 'react-redux';
import images from '../../assets/images/images';
function SearchCity() {
    const [cityName, setCityName] = useState('');
    const dispatch = useDispatch()
    const handleSearch = () => {
        dispatch(city(cityName));
    };

    return (
        <View style={{ flexDirection: 'row', flex: 0.05, marginTop: wp(2) }}>
            {/* <TextInput style={{ borderWidth: wp(0.5), borderColor: 'white', borderRadius: wp(2), paddingHorizontal: wp(3), width: wp(40) }}
                placeholder="Enter city name"
                value={cityName}
                onChangeText={setCityName}
            /> */}
                <TextInput style={{color:'white', borderWidth: wp(0.5), borderColor: 'white', borderRadius: wp(2), 
                paddingHorizontal: wp(3), width: wp(60) }}
                    placeholder="Enter city name"
                    value={cityName}
                    onChangeText={setCityName}
                />
            {/* <Button
            title='okk'
                onPress={handleSearch} /> */}
            
            <TouchableOpacity  onPress={handleSearch}>
                <Image source={images.search} style={{height:wp(7), width:wp(7), marginHorizontal:wp(2),alignItems:'center',justifyContent:'center', marginTop:wp(1)}}/>
            </TouchableOpacity>
        </View>
    );
}

export default SearchCity;
