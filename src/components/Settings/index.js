import { View, Text, TouchableOpacity ,KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import Color from '../../theme/Color'
import SearchCity from '../SearchCity';
import EditList from '../EditList';
import FavCities from '../FavCities';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Settings = (props) => {
  return (
    <SafeAreaProvider>
      <LinearGradient
      colors={[Color.white, Color.white, Color.lightpurple]}
      start={{ x: 0, y: 5 }} 
      end={{ x: 0.1, y: 0.1 }}   
      style={{ flex: 1, }}
    >
      
    <View style={styles.container}>
      <View style={{flex:0.1}}>
        <EditList navigation={props.navigation}/>
      </View>
      <View style={{flex:0.1}}>
        <Text style={styles.title}>Weather</Text>
      </View>
      {/* <KeyboardAvoidingView behavior='padding' style={{flex:}}> */}
      <View style={{flex:0.1}}>
        <SearchCity navigation={props.navigation}/>
      </View>
    {/* </KeyboardAvoidingView> */}
      <View style={{flex:0.7}}>
        <FavCities navigation={props.navigation}/>
      </View>
    </View>
    </LinearGradient>
    </SafeAreaProvider>
     
  )
}

export default Settings