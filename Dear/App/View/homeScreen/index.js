import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import { Text, View, Button, Container } from 'native-base';
import { Colors } from '../../Controller/colorsController';

const HomeScreen = ({navigation}) => {
  const monkaHmm = 'Hmmmmmm!';  
    return (
    <Container>
      <View>
        <StatusBar barStyle="dark-content" backgroundColor={Colors[0].ANDROIDHEADERCOLOR} />
        <Text style={styles.textStyle}>This is it</Text>
        <Text>{monkaHmm}</Text>
        <Button 
          onPress={() => 
            navigation.navigate('ImageScreen')}
          title={monkaHmm}/>
      </View>
    </Container>
    );
  };

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
  }
});

export default HomeScreen;