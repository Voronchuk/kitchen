Ext.define('LawerAdminApp.model.Client', {

    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'lastname', type: 'string', defaultValue: 'lastname'},
        {name: 'firstname', type: 'string', defaultValue: 'firstname'},
        {name: 'phone', type: 'string', defaultValue: 'phone'},
        {name: 'email', type: 'string', defaultValue: 'client@email.com'},
        {name: 'address', type: 'string', defaultValue: 'address'},
        {name: 'modyfiedBy', type: 'string', defaultValue: 'mainadmin'},
        {name: 'modyfiedWhen', type: 'date', dateFormat: 'm/d/Y', defaultValue: '11/12/2012'}
    ]

});
