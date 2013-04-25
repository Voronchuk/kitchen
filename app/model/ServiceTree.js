Ext.define('LawerAdminApp.model.ServiceTree', {

    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string',defaultValue:'name'},
        {name: 'description', type: 'string',defaultValue:'description'},
        {name: 'price', type: 'int',defaultValue:'0'},
        {name: 'sharing', type: 'int', defaultValue: '0'},
        {name:'leaf', type: 'boolean', defaultValue: false},
        {name: 'modyfiedBy', type: 'string', defaultValue: 'mainadmin'},
        {name: 'modyfiedWhen', type: 'date', dateFormat: 'm/d/Y', defaultValue: new Date()},
        {name: 'expanded', type: 'boolean', defaultValue: true}
    ]


});
