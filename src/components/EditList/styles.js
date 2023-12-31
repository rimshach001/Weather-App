import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Color from '../../theme/Color';
const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: wp(8),
        // backgroundColor:'red',
        marginRight: wp(2),
        // marginHorizontal:wp(3)
    },
    dots: {
        height: wp(7),
        width: wp(7),
        resizeMode: 'contain',
        // backgroundColor:'red',
        // marginTop: wp(3),
    },
    items: {
        paddingVertical: wp(0.3),
        borderBottomWidth: wp(0.18),
        borderBottomColor: Color.white,
        flexDirection: 'row',
        height: wp(10),
        width: wp(40),
        paddingHorizontal: wp(2),
        paddingTop:wp(2)
    },
    itemlast:{
        paddingVertical: wp(0.3),
        // borderBottomWidth: wp(0.18),
        // borderBottomColor: Color.white,
        flexDirection: 'row',
        height: wp(10),
        width: wp(40),
        paddingHorizontal: wp(2),
        paddingTop:wp(2)
    },
    closeitem: {
        paddingVertical: wp(0.3),
        flexDirection: 'row',
        height: wp(9),
        width: wp(40),
        paddingHorizontal: wp(2)
    },
    itemText: {
        color: Color.white
    },
    modal: {
        // backgroundColor:'grey', 
        // right: wp(6),
        // borderWidth: wp(0.5),
        // borderColor: Color.white,
        width: wp(40),
        height: wp(30),
        top: wp(21.5),
        // right:wp(5),
        backgroundColor: Color.purple,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        marginLeft: wp(55),
        borderRadius:wp(3)
    },
    close: {
        height: wp(8),
        width: wp(8),
        marginLeft: wp(29),
        alignItems:'center',
        justifyContent:'center'
    },
    tempPic: {
        height: wp(5),
        width: wp(5),
        marginHorizontal: wp(1)
    }

})
export default styles