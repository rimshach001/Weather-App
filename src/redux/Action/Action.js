export const Celsius="Celsius"
export const City="City"
export const WeatherApi="WeatherApi"
export const WeatherError="WeatherError"
export const FavCityName="FavCityName"
export const FavCityWeather="FavCityWeather"
export const DelFavCity="DelFavCity"
export const Fav="Fav"
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
export const favCityname = (error) => {
    return {
        type: FavCityName,
        payload:error,
        
    }
}
export const delFavCity = (error) => {
    return {
        type: DelFavCity,
        payload:error,
        
    }
}
export const fav = (error) => {
    return {
        type: Fav,
        payload:error,
        
    }
}