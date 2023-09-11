import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Color from '../../theme/Color';
const styles = StyleSheet.create({
    // container: {
    //     flexDirection: 'row',
    //     flex: 0.05,
    //     paddingTop: wp(6),
    //     backgroundColor: Color.purple,
    //     width: wp(100),
    //     justifyContent: 'center'
    // },
    tempPic: {
        height: wp(8),
        width: wp(8),
        resizeMode: 'contain',
        // backgroundColor:'red',
        // marginLeft: wp(7),
        right:wp(0.5)
    },

})
export default styles