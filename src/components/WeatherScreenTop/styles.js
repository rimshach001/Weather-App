import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Color from '../../theme/Color';
const styles = StyleSheet.create({

    top: {
        flex: 0.25,
        flexDirection: 'column',
        backgroundColor: Color.purple,
        height: '100%',
        width: '100%',
        borderBottomRightRadius: wp(8),
        borderBottomLeftRadius: wp(8),
        paddingHorizontal: wp(5),
        paddingTop: wp(9),
        // marginTop:wp(10)
        // alignItems:'center'
    },
    areaText: {
        color: Color.white,
        fontSize: wp(11),
        marginTop: wp(1),
        fontWeight: 'bold',
        // marginHorizontal:wp(3),
    },
    fav: {
        height: wp(6),
        width: wp(6),
        resizeMode: 'contain',
        // alignItems:'flex-start',
        // justifyContent:'flex-start'
        // backgroundColor:'red',
        // marginTop:wp(3),
        // bottom:wp(5)   
        // flex:0.5
    },
    dots: {
        height: wp(6),
        width: wp(6),
        resizeMode: 'contain',
        marginLeft: wp(38),
        // alignItems:'flex-end',
        // justifyContent:'flex-end'
        // backgroundColor:'red',
        // marginTop:wp(3),
        // bottom:wp(5) 
        // flex:0.5  
    },
    cancelText: {
        fontSize: wp(4),
        color: Color.white,
        marginLeft: wp(28),
        // bottom:wp(3),
    },
    addText: {
        height: wp(6),
        fontSize: wp(4.5),
        color: Color.white,
        // width:wp(20),
        // marginLeft: wp(55),
        // backgroundColor:'blue',
        top:wp(1)
        // marginBottom:wp(3)
    },
    tempPic: {
        height: wp(8),
        width: wp(8),
        resizeMode: 'contain',
        // backgroundColor:'red',
        marginTop: wp(7),
    },
    modal: {
        // backgroundColor:'grey', 
        right: wp(24),
        // borderWidth:wp(0.5),
        // borderColor:Color.white,
        width: wp(20),
        height: wp(10),
        // marginRight:wp(20),
        // marginTop:wp(3),
        bottom: wp(1),
        backgroundColor: Color.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pic: {
        height: wp(30),
        width: wp(30),
        resizeMode: 'contain'
    },
    tempText: {
        fontSize: wp(9),
        color: Color.white,
        // marginLeft:wp(1),
        bottom: wp(1)
    },
    tempTypeText: {
        fontSize: wp(5),
        marginTop: wp(2),
        color: Color.white,
        // marginLeft:wp(10)
        // marginRight:wp(17)
    },
    tempMinMaxText: {
        fontSize: wp(4),
        // marginTop:wp(6),
        color: Color.white,
    }

})
export default styles