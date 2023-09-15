import { View, Text, ScrollView, Animated } from 'react-native'
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
  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 3)
  // const [animatedValue] = useState(new Animated.Value(0));

  function onSwipeLeft() {
    console.log('SWIPE_LEFT')
    if (currentIndex < Fav.length - 1) {
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
  // function onSwipeLeft() {
  //   console.log('SWIPE_LEFT');
  //   if (currentIndex > -1) {
  //     Animated.timing(animatedValue, {
  //       toValue: currentIndex + 1,
  //       duration: 300, // Adjust the duration as needed
  //       useNativeDriver: false, // Adjust based on your requirements
  //     }).start();
  //   }
  // }

  // function onSwipeRight() {
  //   console.log('SWIPE_RIGHT');
  //   if (currentIndex > 0) {
  //     Animated.timing(animatedValue, {
  //       toValue: currentIndex - 1,
  //       duration: 300, // Adjust the duration as needed
  //       useNativeDriver: false, // Adjust based on your requirements
  //     }).start();
  //   }
  // }
  // const handleAnimatedValueUpdate = (value) => {
  //   // Handle animated value updates here
  //   console.log('Animated value updated:', value);
  //   setCurrentIndex(Math.round(value));
  //   // Add your custom logic here
  // };
  useEffect(() => {
    console.log(Index, "this is num");
    setCurrentIndex(Index)
    // const listenerId = animatedValue.addListener((value) => {
    //   handleAnimatedValueUpdate(value.value);
    // });
  }, [])
  useEffect(() => {
    // console.log("heelo");
  }, [currentIndex]);
  // const animatedStyle = {
  //   transform: [{ translateY: 0 }],
  // };
  return (
    <SafeAreaProvider style={{backgroundColor:Color.mostLightPurple}}>
      <LinearGradient
        colors={[Color.white, Color.white, Color.lightpurple]}
        start={{ x: 0, y: 5 }}
        end={{ x: 0.1, y: 0.1 }}
        style={{ flex: 1, }}
      >
        {Swipedata && (
          <View
          // style={animatedStyle}
          >

            {/* <Swiper
              loop={false}
              index={currentIndex}
              > */}
            <ScrollView showsVerticalScrollIndicator={false} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              <View style={styles.container1}>
                <WeatherScreenTop navigation={props.navigation} index={Fav[currentIndex]} />
                <WeatherScreenCenter data={Fav} index={Fav[currentIndex]} />
                <WeatherScreenBottom data={Fav} index={Fav[currentIndex]} />
              </View>
            </ScrollView>

            {/* </Swiper> */}

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
      <View style={styles.dotPager}>
        <Dots
          length={Fav.length}
          active={currentIndex}
          activeColor={Color.purple1}
          passiveColor={Color.white}
          size={5}
        />
      </View>
    </SafeAreaProvider>

  )
}
export default WeatherScreen


{/* </ScrollView> */ }
// const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6)
{/* <ScrollView onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}> */ }