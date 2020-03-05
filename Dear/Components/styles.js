import Realm from 'realm';

//Colors
class Styles {}
  Styles.schema = {
    name: 'colors',
    primaryKey: 'id',
    properties: {
      id: 'int',
      BGCOLOR: { type: 'string', default: 'white' },
      HEADERCOLOR: { type: 'string', default: 'white' },
      BACKBUTTON: { type: 'string', default: 'black' },
      ANDROIDHEADERCOLOR: { type: 'string', default: 'white' },
      TITLE: { type: 'string', default: 'black' },
    },
};
const allStyles = new Realm({schema: [Styles]});

export let Colors = allStyles.objects('colors');

if(Colors[0] == null){
  allStyles.write(() => {
    allStyles.create('colors', {id: 0});
  })
}else{
}

export function updateColor( BGCOLOR, HEADERCOLOR, BACKBUTTON, ANDROIDHEADERCOLOR, TITLE){
  allStyles.write(() => {
    allStyles.create('colors', 
    {
      id: 0, 
      BGCOLOR: BGCOLOR, 
      HEADERCOLOR: HEADERCOLOR, 
      BACKBUTTON: BACKBUTTON, 
      ANDROIDHEADERCOLOR: ANDROIDHEADERCOLOR, 
      TITLE: TITLE}, 
      'modified')
  });
};





