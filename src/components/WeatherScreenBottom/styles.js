import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
   
    bottom:{
        flex:0.55,
        height: '100%',
        width: '100%',
        marginRight:wp(1)
        
    },
    tempText:{
        fontSize:wp(17),
        color:'white',
        marginLeft:wp(1),
        bottom:wp(5)
    },
    tempTypeText:{
        fontSize:wp(6),
        marginTop:wp(6),
        color:'white',
        // marginLeft:wp(10)
        // marginRight:wp(17)
    },
    tempMinMaxText:{
        fontSize:wp(6),
        marginTop:wp(6),
        color:'white',
    }
})
export default styles