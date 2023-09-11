import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container: {
        // marginVertical: wp(6),
        height: hp(100),
        width: wp(100),
       
        // backgroundColor: 'lightblue',
        // paddingHorizontal: wp(5)
        // flex:1
    },
    top: {
        flex: 0.1,
        backgroundColor: 'red',
        height: '100%',
        width: '100%',
    },
    areaText: {
        color: 'white',
        fontSize: wp(7),
        marginTop: wp(10)
        // justifyContent:'flex-end'
    },
    center: {
        flex: 0.4,
        backgroundColor: 'grey',
        height: '100%',
        width: '100%',
    },
    bottom: {
        flex: 0.5,
        backgroundColor: 'yellow',
        height: '100%',
        width: '100%',
    }
})
export default styles