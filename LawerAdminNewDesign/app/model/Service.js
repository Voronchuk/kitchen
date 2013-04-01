Ext.define('LawerAdminApp.model.Service', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'price', type: 'int'},
        {name: 'sharing', type: 'int', defaultValue: '0'},
        {name: 'modyfiedBy', type: 'string', defaultValue: 'mainadmin'},
        {name: 'modyfiedWhen', type: 'date', dateFormat: 'm/d/Y', defaultValue: '11/12/2012'}
    ]
});
