import React from 'react'
import { Text, Header, Container, Body, Title, Left, Button, Icon} from 'native-base'
import { FlatList } from 'react-native-gesture-handler';
import { bgColor, headerColor } from './styles';

const list = [{ name: 'something #1', /*key: '#1',*/ age: '10'},
              { name: 'something #2', /*key: '#2',*/ age: '11'},
              { name: 'something #3', /*key: '#3',*/ age: '12'},
              { name: 'something #4', /*key: '#4',*/ age: '13'},
              { name: 'something #5', /*key: '#5',*/ age: '14'},
              { name: 'something #6', /*key: '#6',*/ age: '15'},
              { name: 'something #7', /*key: '#7',*/ age: '16'}
];

const ListScreen = () => {
  return (
    <Container style={{ backgroundColor: bgColor }} >
      <Header style={{ backgroundColor: headerColor }} androidStatusBarColor= {headerColor}>
        <Left>
          <Button transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: "white"}}>    MonkaHmm </Title>
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