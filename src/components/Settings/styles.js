import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Color from '../../theme/Color';
const styles = StyleSheet.create({
   
  container:{
    marginVertical:wp(6),
    // alignItems:'center',
    // justifyContent:'center',
    // height:'100%',
    // width:'100%',
    flex:1,
    marginHorizontal:wp(3)
  },
  title:{
    color:Color.white,
    fontSize:wp(10),
    fontWeight:'bold'
  }
})

export default styles