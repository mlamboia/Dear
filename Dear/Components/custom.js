import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';

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
    <FlatList 
      showsVerticalScrollIndicator={false}
      keyExtractor={(list) => list.name} //é necessário uma chave para um array, pode ser feito assim ou como na lista acima
      data={list} 
      renderItem={({item}) => {
        return <Text style={style.textStyle}> {item.name} - Age {item.age} </Text>
      }}
    />
  );
};
const style = StyleSheet.create({ 
  textStyle: {marginVertical: 50}
});



export default ListScreen;