import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Color from '../../theme/Color';
const styles = StyleSheet.create({

    center: {
        flex: 0.21,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        // backgroundColor:'grey'

    },
    pic: {
        // backgroundColor:'grey',
        // resizeMode:'contain',
        height: wp(50),
        width: wp(50),
    },
    box: {
        flexDirection: 'row'
    },
    boxes: {
        // borderWidth: wp(0.5),
        // borderColor: Color.white,
        borderRadius: wp(4),
        flexDirection: 'row',
        height:wp(15),
        width:wp(45),
        marginVertical:wp(1),
        marginHorizontal:wp(1),
        backgroundColor:Color.purple1
    },
    boxesImg: {
        flex: 0.3,
        alignItems:'center',
        justifyContent:'center'
    },
    boxesPart: {
        flexDirection: 'column',
        flex: 0.7,
        justifyContent:'center'
    },
    boxPic:{
        resizeMode:'contain',
        width:wp(7),
        height:wp(7)
    },
    boxText:{
        color:Color.white
    }
})
export default styles