import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = () => {
  const monkaHmm = 'Hmmmmmm!';  
    return (
    <View>
      <Text style={styles.textStyle}>This is it</Text>
      <Text>{monkaHmm}</Text>
      <Button 
        onPress={() => {monkaHmm}}
        title={monkaHmm}/>
    </View>
    );
  };

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
  }
});

export default HomeScreen;