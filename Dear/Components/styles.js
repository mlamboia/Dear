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
};

export function updateBGCOLOR(BGCOLOR){
  allStyles.write(() => {
    allStyles.create('colors', 
    { id: 0, BGCOLOR: BGCOLOR}, 'modified')}
  );
};

export function updateHEADERCOLOR(HEADERCOLOR){
  allStyles.write(() => {
    allStyles.create('colors', 
    { id: 0, HEADERCOLOR: HEADERCOLOR}, 'modified')}
  );
};

export function updateBACKBUTTON(BACKBUTTON){
  allStyles.write(() => {
    allStyles.create('colors', 
    { id: 0, BACKBUTTON: BACKBUTTON}, 'modified')}
  );
};

export function updateANDROIDHEADERCOLOR(ANDROIDHEADERCOLOR){
  allStyles.write(() => {
    allStyles.create('colors', 
    { id: 0, ANDROIDHEADERCOLOR: ANDROIDHEADERCOLOR}, 'modified')}
  );
};

export function updateTITLE(TITLE){
  allStyles.write(() => {
    allStyles.create('colors', 
    { id: 0, TITLE: TITLE}, 'modified')}
  );
};



