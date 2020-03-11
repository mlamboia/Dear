export class Styles {}
  Styles.schema = {
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

export class Styles {}
  Styles.schema = {
    name: 'emotions',
    primaryKey: 'ID',
    properties: {
      ID: { type: 'int', default: '0'},
      NAME: { type: 'string'},
      CREATED_AT: { type: 'date' }
    },
};