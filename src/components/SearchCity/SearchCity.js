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


import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { city } from '../../redux/Action/Action'
import { useDispatch } from 'react-redux';
function SearchCity() {
    const [cityName, setCityName] = useState('');
    const dispatch = useDispatch()
    const handleSearch = () => {
        dispatch(city(cityName));
    };

    return (
        <View>
            <TextInput
                placeholder="Enter city name"
                value={cityName}
                onChangeText={setCityName}
            />
            <Button title="Search" onPress={handleSearch} />

        </View>
    );
}

export default SearchCity;
