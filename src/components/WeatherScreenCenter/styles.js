import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
   
    center:{
        flex:0.3,
        height: '100%',
        alignItems:'center',
        justifyContent:'center',
        width: '100%',
        // backgroundColor:'red'
        
    },
    pic:{
        // backgroundColor:'grey',
        // resizeMode:'contain',
        height:wp(60),
        width:wp(60),
    }
})
export default styles