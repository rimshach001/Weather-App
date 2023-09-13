import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Color from '../../theme/Color';
const styles = StyleSheet.create({
   
    bottom:{
        flex:1,
        height: '100%',
        width: '100%',
        // backgroundColor:Color.purple
        
        
    },
    renderitemsHourly:{
        flexDirection:'column',
         height:wp(25),
         width:wp(23),
          alignItems:'center',
        //   borderWidth:wp(0.5),
          borderRadius:wp(4),
          marginHorizontal:wp(1),
        //   borderColor:Color.white,
          marginVertical:wp(1),
          backgroundColor:Color.purple1
        },

        renderitemsWeekly:{
            flexDirection:'row',
            height:wp(15),
            width:wp(90),
             alignItems:'center',
            //  borderWidth:wp(0.5),
             borderRadius:wp(4),
           //   marginHorizontal:wp(1),
            //  borderColor:Color.white,
             marginVertical:wp(1),
             backgroundColor:Color.purple1
        },
        listText:{
            color:Color.white,
            // marginBottom:wp(.5)
        },
        listTextDay:{
            color:Color.white,
            fontSize:wp(4),
            paddingHorizontal:wp(3)
        },
        listTextTime:{
            color:Color.white,
            fontSize:wp(4.5),
            paddingHorizontal:wp(3)
        },
        picsList:{
            marginTop:wp(1),
            width:wp(10),
            height:wp(10),
        },
        picsListWeekly:{
            marginTop:wp(1),
            width:wp(10),
            height:wp(10),
            alignItems:'center',
            justifyContent:'center',
            // backgroundColor:'red'
        },
        dayNames:{
            color:Color.white,
            fontSize:wp(6),
            marginLeft:wp(1),
            fontWeight:'bold'
        },
        weatherName:{
            color:Color.white,
            fontSize:wp(5),
            marginLeft:wp(1),
            bottom:wp(0.5)
        },
        Forecast1:{
            // backgroundColor:Color.purple1,
            borderRadius:wp(4),
            marginTop:wp(2),
            paddingHorizontal:wp(4),
        },
        Forecast2:{
            // backgroundColor:Color.purple1,
            borderRadius:wp(4),
            marginTop:wp(2),
            paddingHorizontal:wp(4),
            flex:1,
            // flexGrow:1
           
        }
})
export default styles