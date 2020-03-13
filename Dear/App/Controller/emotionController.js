import Realm from 'realm';
import { EMOTIONS } from '../DB/schema';

const emotions = new Realm({schema: [EMOTIONS]});

export function addEmotion(emotionName){
  emotions.write(() => {
    var randomID = emotions.objects('emotion').length + 1;

      emotions.create('emotion',{
        ID: randomID,
        NAME: emotionName,
        CREATED_AT: new Date().toJSON().slice(0,10).replace(/-/g,'/')
      })
  })
}