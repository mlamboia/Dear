import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import { Text, View, Button, Container } from 'native-base';
import { Colors } from './styles';


const HomeScreen = ({navigation}) => {
  const monkaHmm = 'Hmmmmmm!';  
    return (
    <Container>
      <View>
        <StatusBar barStyle="light-content" backgroundColor={Colors[0].ANDROIDHEADERCOLOR} />
        <Text style={styles.textStyle}>This is it</Text>
        <Text>{monkaHmm}</Text>
        <Button 
          onPress={() => 
            navigation.navigate('imageScreen')}
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