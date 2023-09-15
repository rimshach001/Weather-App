import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, KeyboardAvoidingView, Alert } from 'react-native';
import { connect, useSelector } from 'react-redux';
import { celsius, city, fav, searchNew, swipeList } from '../../redux/Action/Action'
import { useDispatch } from 'react-redux';
import images from '../../assets/images/images';
import Color from '../../theme/Color';
import styles from './styles'
function SearchCity({ navigation }) {
    const [cityName, setCityName] = useState('');
    const dispatch = useDispatch()
    const celsiusRedux = useSelector((state) => state.data.celsiusIs)
    const api=useSelector((state)=>state.data.api)
    useEffect(()=>{
console.log(api?.data, "lets check");
    },[api])
    const handleSearch = () => {
        dispatch(city(cityName.toLowerCase()));
        dispatch(fav(false))
        dispatch(swipeList(false))
        setCityName('')
        // if(api?.data !==undefined ){
            navigation.navigate("WeatherScreen")
        // }else{
        //     return
        // }
    };
    return (
            <View style={{marginHorizontal:wp(3),
                borderRadius: wp(2), flexDirection: 'row',
                paddingHorizontal: wp(3), backgroundColor: Color.mostLightPurple,height:wp(9),
                borderColor:Color.purple1, borderWidth:wp(0.2)
            }}>
                
                <View>
                    <TextInput style={{
                        color: Color.white,
                        width: wp(75), height: wp(8)
                    }}
                        placeholder="Search for a city"
                        placeholderTextColor={Color.white}
                        value={cityName}
                        onChangeText={setCityName}
                        onSubmitEditing={handleSearch}
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={handleSearch}>
                        <Image source={images.search} style={{
                            height: wp(7), width: wp(7), marginHorizontal: wp(2),
                            alignItems: 'center', justifyContent: 'center', marginTop: wp(1)
                        }} />
                    </TouchableOpacity>
                </View>
            </View>
    );
}

export default SearchCity;
