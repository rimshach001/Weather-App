import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import images from '../../assets/images/images'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { celsius } from '../../redux/Action/Action'

const EditList = () => {
    const [Val, setVal] = useState(false)
    const dispatch = useDispatch()
    const celsiusRedux = useSelector((state) => state.data.celsiusIs)
    const DotsBtn = (() => {
        if (Val == true) {
            setVal(false)
        }
        else {
            setVal(true)
        }
    })
    const handleBtn = (() => {
        console.log("okk");
        dispatch(celsius())
        // setData(celsiusRedux)
    })
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={DotsBtn}>
                <Image style={styles.dots} source={images.horizantalDots} />
            </TouchableOpacity>
            {
                Val == true &&
                (<View style={styles.modal}>
                    <TouchableOpacity >
                        <TouchableOpacity style={styles.items}>
                        <Text style={styles.itemText}>Edit List</Text>
                        </TouchableOpacity>
                        {/* <View style={styles.items}>
                        <Image style={styles.tempPic} source={celsiusRedux ? images.fahrenheit : images.celsius} />
                        </View> */}
                        <TouchableOpacity style={styles.items} onPress={handleBtn}>
                        <Text style={styles.itemText}>Celsius</Text>
                        {celsiusRedux &&(
                                <Image style={styles.tempPic} source={images.tick}/>
                        )}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items} onPress={handleBtn}>
                        <Text style={styles.itemText}>Fahrenheit</Text>
                        {!celsiusRedux &&(
                                <Image style={styles.tempPic} source={images.tick}/>
                        )}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                        <Text style={styles.itemText}>favorite</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>)
            }
        </View>
    )
}

export default EditList