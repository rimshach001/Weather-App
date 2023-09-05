import { View, Text } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
const apiKey = '8a6761011c3f008cac5812fafc872954'
const lat = '31.5204'
const lon = '74.3587'
const city='lahore'
const FetchData =async () => {
  // const city= useSelector((state) => state.data.data.city)
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
    try {
        // const res = await axios.get(apiUrl)
        // // console.log(res.data);
        // return res.data

        const res=await fetch(apiUrl)
        const dataJson= await res.json()
        return dataJson
      }
      catch (error) {
        console.log(error, " error")
      }
}

export default FetchData

// // React Component
// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { selectWeatherData } from './selectors'; // Import your selector

// function WeatherComponent() {
//   const weatherData = useSelector(selectWeatherData);

//   useEffect(() => {
//     // 'weatherData' now contains the API response data from the Redux store
//     console.log(weatherData);
//   }, [weatherData]);

//   return (
//     // Your component JSX
//   );
// }

// // import { View, Text } from 'react-native'
// // import React, { useEffect } from 'react'
// // import axios from 'axios'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { weather } from '../redux/Action/Action'
// // const apiKey = 'ca8143791cc67420b2392536c97432eb'
// // const lat = '31.5204'
// // const lon = '74.3587'
// // const city='london'
// // // const apiUrl = `https://api.openweathermap.org/data/2.5/forecast`
// // const FetchData = async () => {
// //   const cityName = useSelector((state) => state.data.data.city)
// //   const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`
// //     try {
// //         const res = await axios.get(apiUrl)
// //         // console.log(res.data);
// //         return res.data
// //       }
// //       catch (error) {
// //         console.log(error, " error")
// //       }
// //   // const cityName = useSelector((state) => state.data.data.city);
// //   // console.log(cityName,"name of city")
// //   // const dispatch = useDispatch();

// //   // useEffect(() => {
// //   //   const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
    
// //   //   const Data = async () => {
// //   //     try {
// //   //       const res = await axios.get(apiUrl);
// //   //       dispatch(weather(res.data))
// //   //     } catch (error) {
// //   //       console.log(error, " error");
// //   //     }
// //   //   };

// //   //   Data();
// //   // }, [cityName, dispatch]);

// //   // return (
// //   //  <>
// //   //  </>
// //   // );
// // }

// // export default FetchData

