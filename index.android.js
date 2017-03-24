/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Modal,
  ScrollView,
} from 'react-native';
import ImageElements from './app/components/imageElements';

export default class imageGallery extends Component {

  state = {
    modalVisible: false,
    modalImage: require('./app/img/1.jpg'),
    images: [
      require('./app/img/2.jpg'),
      require('./app/img/3.jpg'),
      require('./app/img/4.jpg'),
      require('./app/img/5.jpg'),
      require('./app/img/6.jpg'),
      require('./app/img/7.jpg'),
      require('./app/img/8.jpg'),
    ]
  }

  setModalVisible(visible , imageKey){
    this.setState({ modalImage: this.state.images[imageKey]});
    this.setState({ modalVisible: visible});
  }

  getImage(){
    return this.state.modalImage;
  }
  render() {

    let images = this.state.images.map((val, key) =>{
      return <TouchableWithoutFeedback  key={key}
                onPress={ () => {this.setModalVisible(true,key)}}>
                <View style={styles.imagewrap}>
                  <ImageElements imgsource ={val} ></ImageElements>
                </View>
              </TouchableWithoutFeedback>
    });

    return (
      <View style={styles.container}>
        <Modal style={styles.modal} transparent={true}
          animationType="fade" visible={this.state.modalVisible} onRequestClose={ () => {}}>
          <View style={styles.modal}>
            <Text style={styles.text}
              onPress={ () => {this.setModalVisible(false)}}>Close</Text>
            <ImageElements imgsource={this.state.modalImage}></ImageElements>
          </View>
        </Modal>
          {images}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#eee',
  },
  imagewrap:{
    margin: 2,
    padding: 2,
    height: (Dimensions.get('window').height / 3) - 12,
    width: (Dimensions.get('window').width / 2) - 4,
    backgroundColor: '#fff',
  },
  modal: {
    flex: 1,
    padding: 40,
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  text: {
    color: '#fff',
  },
  // ScrollView: {
  // }
});

AppRegistry.registerComponent('imageGallery', () => imageGallery);
