import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = () => {
  const monkaHmm = 'Hmmmmmm!';  
    return (
    <View>
      <Text style={styles.textStyle}>This is it</Text>
      <Text>{monkaHmm}</Text>
      <Button 
        onPress={() => console.log(Realm.defaultPath)}
        title={monkaHmm}/>
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

export default HomeScreen;