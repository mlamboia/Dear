//Colors
import realm from 'realm';

export const BGCOLOR = "white"; //Background color
export const HEADERCOLOR = "white"; //Header color
export const BACKBUTTON = "black";
export const ANDROIDHEADERCOLOR = "black";
export const TITLE = "black";

//Heights

class AllStyles extends Realm.Object {}
    AllStyles.schema = {
        name: 'color',
        properties:{
          BGCOLOR:{type: 'string', default: 'white'},
          HEADERCOLOR: {type: 'string', default: 'white'},
          BACKBUTTON: {type: 'string', default: 'black'},
          ANDROIDHEADERCOLOR:{type: 'string', default: 'white'},
          TITLE: {type: 'string', default: 'white'},
          }
    };
export default new Realm({schema: [AllStyles]})
  