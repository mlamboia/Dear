import React from 'react'
import { Text, Header, Container, Body, Title, Left, Button, Icon} from 'native-base'
import { FlatList } from 'react-native-gesture-handler';
import { Colors } from '../../Controller/colorsController';

const Emotion = ({ navigation }) => {
  return (
    <Container style={{ backgroundColor: Colors[0].BGCOLOR }} >
    <FlatList 
      showsVerticalScrollIndicator={false}
      keyExtractor={(Colors) => Colors.ANDROIDHEADERCOLOR} //é necessário uma chave para um array, pode ser feito assim ou como na lista acima
      data={Colors} 
      renderItem={({item}) => {
        return <Text> {item.ANDROIDHEADERCOLOR}</Text>
      }}
    />
    </Container>
  );
};

export default Emotion;