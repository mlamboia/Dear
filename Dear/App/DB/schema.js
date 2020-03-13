export class Styles {}
  Styles.schema = {
    name: 'colors',
    primaryKey: 'ID',
    properties: {
      ID: { type: 'int', default:'0' },
      BGCOLOR: { type: 'string', default: 'white' },
      HEADERCOLOR: { type: 'string', default: 'black' },
      BACKBUTTON: { type: 'string', default: 'black' },
      ANDROIDHEADERCOLOR: { type: 'string', default: 'white' },
      TITLE: { type: 'string', default: 'black' },
    },
};

export class Diaries {}
  Diaries.schema = {
    name: 'diary',
    primaryKey: 'ID',
    properties: {
      ID: {type: 'int', default:'0' },
      NAME: { type: 'string', default: 'white' },
      DESCRIPTION: { type: 'string', default: 'black' },
      EMOTION: { type: 'string', default: 'black' },
      CREATED_AT: { type: 'date' }
    },
};

export class Emotions {}
  Emotions.schema = {
    name: 'emotions',
    primaryKey: 'ID',
    properties: {
      ID: { type: 'int', default: '0'},
      NAME: { type: 'string'},
      CREATED_AT: { type: 'date' }
    },
};


//https://reactnativecode.com/realm-database-insert-update-delete-view-crud/