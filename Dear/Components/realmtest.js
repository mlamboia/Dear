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
          name:'string',
          description: 'string',
          // emotion: {type: 'linkingObjects', objectType: 'emotions', property: 'name'}
          }
      }]
      // schema:[{
      //   name: 'emotions',
      //     properties: {
      //       name: 'string'
      //   }
      // }]
    });
    
    //  realm.write(() => {
    // //    realm.create('emotions', {
    // //      name: 'Happy' });
    // //    
    //    realm.create('diary', {
    //       name: 'My day',
    //       description: 'things that i did!',
    // //       emotion: 'Happy'});
    //  })
    // });
    
    const diaries = realm.objects('diary')

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

