import React from 'react'
import { Text, View } from 'react-native'

const Realm = require('realm');

const CarSchema = {
  name: 'Car',
  properties: {
    make:  'string',
  }
};


Realm.open({schema: [CarSchema]})
  .then(realm => {
    realm.write(() => {
      realm.create('Car', {make: 'Honda'});
    });
  })

const carros = realm.objects('Car');

export default{

  render() {
    return (
      <View>
        <Text>  {carros} </Text>
      </View>
    )
  }
}
