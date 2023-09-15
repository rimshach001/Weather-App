import {Celsius,City,WeatherApi,WeatherError,Fav,FavCityName,DelFavCity,ClickOnScreen,SwipeList,CurIndex } from "../Contants"

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
export const clickOnScreen = (error) => {
    return {
        type: ClickOnScreen,
        payload:error,
        
    }
}
export const swipeList = (error) => {
    return {
        type: SwipeList,
        payload:error,
        
    }
}
export const curIndex = (error) => {
    return {
        type: CurIndex,
        payload:error,
        
    }
}