import React from 'react';
import { View, Text, Button } from 'native-base';
import { StatusBar } from 'react-native';
import { Colors } from '../Controller/styles';

const imageScreen = () =>{
  return (
    <View>
        <StatusBar barStyle="light-content" backgroundColor={Colors[0].ANDROIDHEADERCOLOR} />
      <Text> imageScreen </Text>
    </View>
  );
}

export default imageScreen;
