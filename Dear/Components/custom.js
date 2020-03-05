import React from 'react'
import { Text, Header, Container, Body, Title, Left, Button, Icon} from 'native-base'
import { FlatList } from 'react-native-gesture-handler';
import { BGCOLOR, HEADERCOLOR, BACKBUTTON, ANDROIDHEADERCOLOR, TITLE } from './styles';
import { createStackNavigator } from '@react-navigation/stack';
import { AllStyles } from './styles'

const Stack = createStackNavigator();

const list = [{ name: 'something #1', /*key: '#1',*/ age: '10'},
              { name: 'something #2', /*key: '#2',*/ age: '11'},
              { name: 'something #3', /*key: '#3',*/ age: '12'},
              { name: 'something #4', /*key: '#4',*/ age: '13'},
              { name: 'something #5', /*key: '#5',*/ age: '14'},
              { name: 'something #6', /*key: '#6',*/ age: '15'},
              { name: 'something #7', /*key: '#7',*/ age: '16'}
];

const ListScreen = ({ navigation: { goBack } }) => {
  return (
    <Container style={{ backgroundColor: BGCOLOR }} >
      <Header style={{ backgroundColor: HEADERCOLOR }} androidStatusBarColor= { ANDROIDHEADERCOLOR }>
          <Button transparent
          onPress={() => 
          goBack()}>
            <Icon name='arrow-back'style={{ color: BACKBUTTON}}/>
          </Button>
        <Body>
          <Title style={{ color: TITLE}}>CUSTOM</Title>
        </Body>
      </Header>

    <FlatList 
      showsVerticalScrollIndicator={false}
      keyExtractor={(list) => list.name} //é necessário uma chave para um array, pode ser feito assim ou como na lista acima
      data={list} 
      renderItem={({item}) => {
        return <Text> {item.name} - Age {item.age} </Text>
      }}
    />
    </Container>
  );
};

export default ListScreen;