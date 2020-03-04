import React, {Component}  from 'react';
import { Text, FlatList} from 'react-native';
import Realm from 'realm';

export default class diaries extends Component{
  constructor(props){
    super(props);
    this.state = { realm: null };
  }
  
  render(){
    let realm = new Realm({
      schema:[{
        name: 'diary',
        properties:{
          name:{type: 'string', default: 'FeelsGoodMan'},
          description: {type: 'string', default: 'FeelsGoodMan'},
          emotion: {type: 'string', default: 'FeelsGoodMan'}
          }
      }]
      // schema:[{
      //   name: 'emotions',
      //     properties: {
      //       name: 'string'
      //   }
      // }]
    });
       
    const diaries = realm.objects('diary')

    if(diaries[0] == null){
      realm.write(() => {
        realm.create('diary', {});
      })
    }else{
    }

    return (
      <FlatList 
        showsVerticalScrollIndicator={false}
        keyExtractor={(diaries) => diaries.name}
        data={diaries} 
        renderItem={({item}) => {
          return (
            <Text> 
              {item.name} 
              {item.description} 
              {item.emotion} 
            </Text>
          );
        }}
      />
    );
}}

