import { View, Text, TouchableOpacity, Image, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import images from '../../assets/images/images'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { celsius, swipeList } from '../../redux/Action/Action'
const EditList = ({ navigation }) => {
  const [Val, setVal] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()
  const celsiusRedux = useSelector((state) => state.data.celsiusIs)
  const DotsBtn = () => {
    setShowModal(!showModal);
  };

  const NavigateToFavList = (() => {
    dispatch(swipeList(true))
    navigation.navigate("WeatherScreen")
  })
  const closeModal = () => {
    setShowModal(false);
  };
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
      <Modal
        transparent={true}
        animationType="slide"
        visible={showModal}
        onRequestClose={closeModal}
      >
       
          <View style={styles.modal}>
            {/* <TouchableOpacity onPress={closeModal} style={styles.closeitem}>
              <Image style={styles.close} source={images.close} />
            </TouchableOpacity> */}
            <TouchableOpacity>
              <TouchableOpacity style={styles.items} >
                <Text style={styles.itemText}>Fav List</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.items} onPress={handleBtn}>
                <Text style={styles.itemText}>Celsius</Text>
                {celsiusRedux && <Image style={styles.tempPic} source={images.tick} />}
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemlast} onPress={handleBtn}>
                <Text style={styles.itemText}>Fahrenheit</Text>
                {!celsiusRedux && <Image style={styles.tempPic} source={images.tick} />}
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <TouchableWithoutFeedback onPress={closeModal}>
          <View style={{flex:1}}></View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}

export default EditList
