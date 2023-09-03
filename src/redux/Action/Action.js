export const Celsius="Celsius"
export const City="City"
export const WeatherApi="WeatherApi"
export const WeatherError="WeatherError"
// export const ReqApi='ReqApi'
export const celsius = () => {
    return {
        type: Celsius,
    }
}
export const city = (cityname) => {
    return {
        type: City,
        payload:cityname
    }
}
export const weatherapi = (data) => {
    return {
        type: WeatherApi,
        payload:data,
    }
}
export const weathererror = (error) => {
    return {
        type: WeatherError,
        payload:error,
        
    }
}