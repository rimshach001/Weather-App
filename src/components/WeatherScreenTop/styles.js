import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    
    top:{
        flex:0.15,
        flexDirection:'row',
        // backgroundColor:'red',
        height: '100%',
        width: '100%',
        // alignItems:'center'
    },
    areaText:{
        color:'white',
        fontSize:wp(10),
        marginTop:wp(4),
        fontWeight:'bold',
        marginHorizontal:wp(3)
        // justifyContent:'flex-end'
    },
    tempPic:{
        height:wp(8),
        width:wp(8),
        // backgroundColor:'red',
        marginTop:wp(6),
        // borderRadius:wp(3),
        // borderColor:'white',
        // borderWidth:wp(0.3),
        // padding:wp(3)
        
    }
    
})
export default styles