import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import Color from '../../theme/Color'
import SearchCity from '../SearchCity';
import EditList from '../EditList/EditList';
import FavCities from '../FavCities';
import { useDispatch } from 'react-redux';
import { clickOnScreen } from '../../redux/Action/Action';
const Settings = (props) => {
  return (
     <LinearGradient
      colors={[Color.white, Color.white, Color.lightpurple]}
      start={{ x: 0, y: 5 }} 
      end={{ x: 0.1, y: 0.1 }}   
      style={{ flex: 1, }}
    >
    <TouchableOpacity style={styles.container}>
      <View style={{flex:0.1}}>
        <EditList/>
      </View>
      <View style={{flex:0.1}}>
        <Text style={styles.title}>Weather</Text>
      </View>
      <View style={{flex:0.1}}>
        <SearchCity navigation={props.navigation}/>
      </View>
      <View style={{flex:0.7}}>
        <FavCities navigation={props.navigation}/>
      </View>
    </TouchableOpacity>
    </LinearGradient>
  )
}

export default Settings