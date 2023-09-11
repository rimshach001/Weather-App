import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import Color from '../../theme/Color'
import SearchCity from '../SearchCity';
import EditList from '../EditList/EditList';
import FavCities from '../FavCities';

const Settings = (props) => {
  return (
     <LinearGradient
      colors={[Color.white, Color.white, Color.lightpurple]}
      start={{ x: 0, y: 5 }} 
      end={{ x: 0.1, y: 0.1 }}   
      style={{ flex: 1, }}
    >
    <View style={styles.container}>
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
        <FavCities/>
      </View>
    </View>
    </LinearGradient>
  )
}

export default Settings