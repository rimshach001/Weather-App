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
        marginRight: wp(2)
    },
    renderlist: {
        // height: '100%',
        // width: '100%'
    },
    listItems: {
        // borderWidth: wp(1),
        borderColor: Color.mostLightPurple,
        borderRadius: wp(5),
        backgroundColor: Color.purple1,
        marginVertical: wp(1),
        marginHorizontal: wp(3),
        flexDirection: 'row',
        height: wp(25)
    },
    listCityName: {
        fontSize: wp(8),
        color: Color.white,
        fontWeight:'bold'
    },
    listTemp: {
        fontSize: wp(6),
        color: Color.white
    },
    listweatherType: {
        fontSize: wp(4),
        color: Color.white
    },
    pic: {
        height: wp(16),
        width: wp(16),
        resizeMode: 'contain',
    },
    favList: {
        flex: 0.6,
        flexDirection: 'column',
        paddingLeft: wp(5),
        // alignItems:'center',
        justifyContent:'center'
    }

})
export default styles