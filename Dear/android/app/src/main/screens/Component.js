import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const ComponentsScreen = () => {
  const monkaHmm = 'Hmmmmmm!';  
    return (
    <View>
      <Text style={styles.textStyle}>This is it</Text>
      <Text>{monkaHmm}</Text>
    </View>
    );
  };


// const Component = function() {
//   return <Text style={{ fontsize: 30 }}> This is it </Text>; Same as above
// };

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
  }
});

export default ComponentsScreen;
