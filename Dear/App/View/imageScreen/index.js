import React from 'react';
import { View, Text, Button } from 'native-base';
import { StatusBar } from 'react-native';
import { Colors } from '../../Controller/colorsController';

const ImageScreen = () =>{
  return (
    <View>
        <StatusBar barStyle="dark-content" backgroundColor={Colors[0].ANDROIDHEADERCOLOR}/>
      <Text> imageScreen </Text>
    </View>
  );
}

export default ImageScreen;
