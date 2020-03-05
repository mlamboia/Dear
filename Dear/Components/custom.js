import React from 'react'
import { Text, Header, Container, Body, Title, Left, Button, Icon} from 'native-base'
import { FlatList } from 'react-native-gesture-handler';
import { Colors, updateColor} from './styles';

updateColor('','','red')

const ListScreen = ({ navigation: { goBack } }) => {
  return (
    <Container style={{ backgroundColor: Colors[0].BGCOLOR }} >
      <Header style={{ backgroundColor: Colors[0].HEADERCOLOR }} androidStatusBarColor= { Colors[0].ANDROIDHEADERCOLOR}>
          <Button transparent
          onPress={() => 
          goBack()}>
            <Icon name='arrow-back'style={{ color: Colors[0].BACKBUTTON}}/>
          </Button>
        <Body>
          <Title style={{ color: Colors[0].TITLE}}>CUSTOM</Title>
        </Body>
      </Header>

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

export default ListScreen;