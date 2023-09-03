import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
   
    bottom:{
        flex:0.6,
        height: '100%',
        width: '100%',
        
    },
    renderitems:{
        flexDirection:'column',
         height:wp(25),
         width:wp(23),
          alignItems:'center',
          borderWidth:wp(0.5),
          borderRadius:wp(4),
          marginHorizontal:wp(1),
          borderColor:'white',
          marginVertical:wp(1)
        },
        weeklyRender:{

        },
        listText:{
            color:'white',
            // marginBottom:wp(.5)
        },
        listTextDay:{
            color:'white',
            fontSize:wp(4),
            paddingHorizontal:wp(3)
        },
        listTextTime:{
            color:'white',
            fontSize:wp(4.5),
            paddingHorizontal:wp(3)
        },
        picsList:{
            marginTop:wp(1),
            width:wp(10),
            height:wp(10),
            // justifyContent:'center',
            // backgroundColor:'red'
        },
        dayNames:{
            color:'white',
            fontSize:wp(5),
            marginLeft:wp(1)
        }
})
export default styles