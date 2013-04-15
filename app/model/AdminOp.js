Ext.define('LawerAdminApp.model.AdminOp', {

    extend: 'Ext.data.Model',

    fields: [
        {name: 'time', type: 'date', defaultValue: new Date()},
        {name: 'cap', type: 'string', defaultValue: 'somebody'},
        {name: 'nick', type: 'string'},
        {name: 'op', type: 'string'},
        {name: 'state', type: 'string'}
    ]

});
