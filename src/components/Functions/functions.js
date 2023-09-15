
import { useDispatch } from "react-redux"

export const favBtn = (() => {
    const dispatch = useDispatch()
    dispatch(favCityname(Data))
    dispatch(fav())
    // navigation.navigate("settings")
    dispatch(swipeList(true))
  })
