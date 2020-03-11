import Realm from 'realm';
import { Styles } from '../DB/stylesSchema';

const allStyles = new Realm({schema: [Styles]});

export let Colors = allStyles.objects('colors');

if(Colors[0] == null){
  allStyles.write(() => {
    allStyles.create('colors', {ID: 0});
  })
};

export function updateBGCOLOR(BGCOLOR){
  allStyles.write(() => {
    allStyles.create('colors', 
    { ID: 0, BGCOLOR: BGCOLOR}, 'modified')}
  );
};

export function updateHEADERCOLOR(HEADERCOLOR){
  allStyles.write(() => {
    allStyles.create('colors', 
    { ID: 0, HEADERCOLOR: HEADERCOLOR}, 'modified')}
  );
};

export function updateBACKBUTTON(BACKBUTTON){
  allStyles.write(() => {
    allStyles.create('colors', 
    { ID: 0, BACKBUTTON: BACKBUTTON}, 'modified')}
  );
};

export function updateANDROIDHEADERCOLOR(ANDROIDHEADERCOLOR){
  allStyles.write(() => {
    allStyles.create('colors', 
    { ID: 0, ANDROIDHEADERCOLOR: ANDROIDHEADERCOLOR}, 'modified')}
  );
};

export function updateTITLE(TITLE){
  allStyles.write(() => {
    allStyles.create('colors', 
    { ID: 0, TITLE: TITLE}, 'modified')}
  );
};