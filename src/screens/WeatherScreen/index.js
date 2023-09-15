import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import WeatherScreenTop from '../../components/WeatherScreenTop'
import WeatherScreenCenter from '../../components/WeatherScreenCenter'
import WeatherScreenBottom from '../../components/WeatherScreenBottom'
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from 'react-redux'
import Color from '../../theme/Color'

import { useSwipe } from './swipe'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Dots from 'react-native-dots-pagination'
import Swiper from 'react-native-swiper'
const WeatherScreen = (props) => {
  const Data = useSelector((state) => state.data.api);
  const Swipedata = useSelector((state) => state.data.swipe);
  const Fav = useSelector((state) => state.data.favCities);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const Index = useSelector((state) => state.data.index);
  console.log(Index, "this is index no----");
  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6)
  function onSwipeLeft() {
    console.log('SWIPE_LEFT')
    if (currentIndex > -1) {
      setCurrentIndex(currentIndex + 1);
      console.log((currentIndex, "index left"));
    }
  }
  function onSwipeRight() {
    console.log('SWIPE_RIGHT')
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      console.log(currentIndex, "index right");
    }
  }
  useEffect(() => {
    setCurrentIndex(Index)
  }, [])
  useEffect(() => {
    console.log("heelo");
  }, [currentIndex]);
  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={[Color.white, Color.white, Color.lightpurple]}
        start={{ x: 0, y: 5 }}
        end={{ x: 0.1, y: 0.1 }}
        style={{ flex: 1, }}
      >
        {Swipedata && (
          <View>
            {/* <Swiper
              loop={false}
              index={currentIndex}
              onIndexChanged={(index) => {
                if (index < currentIndex) {
                  onSwipeLeft()
                } else if (index > currentIndex) {
                  onSwipeRight();
                }
              }}> */}
            <ScrollView onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              <View style={styles.container1}>
                <WeatherScreenTop navigation={props.navigation} index={Fav[currentIndex]} />
                <WeatherScreenCenter data={Fav} index={Fav[currentIndex]} />
                <WeatherScreenBottom data={Fav} index={Fav[currentIndex]} />
              </View>
            </ScrollView>

            {/* </Swiper> */}
            <View style={styles.dotPager}>
              <Dots
                length={Fav.length}
                active={currentIndex}
                activeColor={Color.purple1}
                passiveColor={Color.white}
                size={5}
              />
            </View>
          </View>
        )}
        {(Data && Swipedata !== true) && (
          <View style={styles.container}>
            <WeatherScreenTop navigation={props.navigation} index={Data?.data} />
            <WeatherScreenCenter index={Data?.data} />
            <WeatherScreenBottom index={Data?.data} />
          </View>
        )}
      </LinearGradient>
    </SafeAreaProvider>

  )
}
export default WeatherScreen


{/* </ScrollView> */ }
// const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6)
{/* <ScrollView onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}> */ }