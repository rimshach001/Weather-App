// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import FetchData from '../../helpers/api'
// import { WeatherApi } from '../Action/Action';

// function* getapi(action) {
//     try {
//       const data = yield call(FetchData)
//       yield put(WeatherApi(data))
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   function* mySaga() {
//     yield takeLatest('WeatherApi', getapi)
//   }

//   export default mySaga


import { call, put, takeLatest } from 'redux-saga/effects';
import { WeatherApi, WeatherError, weatherapi, weathererror } from '../Action/Action';
import axios from 'axios';
import { useSelector } from 'react-redux';

function* fetchWeatherData(action) {
    try {
        console.log("show city")
        const data = yield call(getAPI, action.payload);
        console.log("show city again 1")
        yield put(weatherapi(data));
    } catch (error) {
        console.log(error)
        yield put(weathererror(error));
    }
}

function getAPI(city) {
    // const cityplz = useSelector((state) => state.data.city)
    // console.log(cityplz, "hojjjaaa");
    const apiKey = 'ca8143791cc67420b2392536c97432eb';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    return axios.get(apiUrl);
}

function* weatherSaga() {
    yield takeLatest('City', fetchWeatherData);
}

export default weatherSaga;
