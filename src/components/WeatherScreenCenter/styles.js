import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
   
    center:{
        flex:0.25,
        height: '100%',
        alignItems:'center',
        justifyContent:'center',
        width: '100%',
        // backgroundColor:'red'
        
    },
    pic:{
        // backgroundColor:'grey',
        // resizeMode:'contain',
        height:wp(50),
        width:wp(50),
    }
})
export default styles