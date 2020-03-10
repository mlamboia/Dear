import React from 'react';
import { View, Text, Button } from 'native-base';
import { StatusBar } from 'react-native';
import { Colors } from './styles';
import { changeNavigationBarColor } from 'react-native-navigation-bar-color';

changeNavigationBarColor('red');


const imageScreen = () =>{
  return (
    <View>
        <StatusBar barStyle="light-content" backgroundColor={Colors[0].ANDROIDHEADERCOLOR} />
      <Text> imageScreen </Text>
    </View>
  );
}

export default imageScreen;
