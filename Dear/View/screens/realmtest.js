import React, {Component}  from 'react';
import { Text, View, ScrollView} from 'react-native';
import Realm from 'realm';

export default class Dogs extends Component{
  constructor(props){
    super(props);
    this.state = { realm: null };
  }
  
  render(){
    let realm = new Realm({
      schema:[{name: 'Dog', properties:{name:'string'}}]
    });
    
    realm.write(() => {
      realm.create('Dog', {name: 'Rex'});
    });

    const DOGS = realm.objects('Dog')

    return <ScrollView><Text>{DOGS.map(e => e.name + '\n' )}</Text></ScrollView>
  }
}

