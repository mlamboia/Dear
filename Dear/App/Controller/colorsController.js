import Realm from 'realm';
import { Styles } from '../DB/schema';

const color = new Realm({schema: [Styles]});

export let Colors = color.objects('colors');

if(Colors[0] == null){
  color.write(() => {
    color.create('colors', {ID: 0});
  })
};

export function updateBGCOLOR(BGCOLOR){
  color.write(() => {
    color.create('colors', 
    { ID: 0, BGCOLOR: BGCOLOR}, 'modified')}
  );
};

export function updateHEADERCOLOR(HEADERCOLOR){
  color.write(() => {
    color.create('colors', 
    { ID: 0, HEADERCOLOR: HEADERCOLOR}, 'modified')}
  );
};

export function updateBACKBUTTON(BACKBUTTON){
  color.write(() => {
    color.create('colors', 
    { ID: 0, BACKBUTTON: BACKBUTTON}, 'modified')}
  );
};

export function updateANDROIDHEADERCOLOR(ANDROIDHEADERCOLOR){
  color.write(() => {
    color.create('colors', 
    { ID: 0, ANDROIDHEADERCOLOR: ANDROIDHEADERCOLOR}, 'modified')}
  );
};

export function updateTITLE(TITLE){
  color.write(() => {
    color.create('colors', 
    { ID: 0, TITLE: TITLE}, 'modified')}
  );
};