import { call, put, takeLatest } from 'redux-saga/effects';
import { WeatherApi, WeatherError, weatherapi, weathererror } from '../Action/Action';

import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Alert } from 'react-native';


function* fetchWeatherData(action) {
    try {
        if (action == '') {
            Alert.alert("Enter your city name")
        }
        // else if (action.trim() === ' ') {
        //     Alert.alert("Enter your city name");
        // }
        else {
            console.log(action, "okkk")
            const data = yield call(getAPI, action.payload);
            yield put({ type: 'WeatherApi', payload: data })

        }
    } catch (error) {
        Alert.alert("Enter correct city name")
        yield put({ type: 'WeatherError', payload: error })
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