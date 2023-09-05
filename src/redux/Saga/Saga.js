import { call, put, takeLatest } from 'redux-saga/effects';
import { WeatherApi, WeatherError, weatherapi, weathererror } from '../Action/Action';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


function* fetchWeatherData(action) {
    try {
        console.log(action,"okkk")
        const data = yield call(getAPI, action.payload);
        // console.log(data.data.list[0], "---data of responseee---");
        console.log("show city again 1",data.data.city.name)
        yield put(weatherapi(data));
    } catch (error) {
        console.log(error)
        yield put(weathererror(error));
    }
}
function getAPI(city) {
    const apiKey = '8a6761011c3f008cac5812fafc872954';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    console.log(apiUrl, "url");
    return axios.get(apiUrl);
}

function* weatherSaga() {
    yield takeLatest('City', fetchWeatherData);
}

export default weatherSaga;


//     const initialCity = 'lahore'; 
//   try {
//     const initialData = yield call(getAPI, initialCity);
//     yield put(weatherapi(initialData));
//   } catch (error) {
//     yield put(weathererror(error));
//   }