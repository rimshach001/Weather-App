import { Fahrenheit, Celsius, City, WeatherApi, WeatherError } from "../Action/Action";

const initialState = {
    celsiusIs: true,
    city: 'lahore',
    api: `https://api.openweathermap.org/data/2.5/forecast?q=lahore&appid=8a6761011c3f008cac5812fafc872954`,
    error: null

    // fahrenheitIs:false
}

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case Celsius:
            return {
                ...state,
                celsiusIs: !state.celsiusIs,
            };
        case City:
            return { 
                ...state,
                 city: action.payload };

        case WeatherApi:
            return {
                ...state,
                api: action.payload,
                // error: null
            };
        case WeatherError:
            return {
                ...state,
                // api: null,
                error: action.payload
            };

        // ...state,
        // fahrenheitIs: !state.fahrenheitIs

        default:
            return state;
    }
}
