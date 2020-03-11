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