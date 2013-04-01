Ext.define('LawerAdminApp.model.Client', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'lastname', type: 'string', defaultValue: 'Dow'},
        {name: 'firstname', type: 'string', defaultValue: 'Clave'},
        {name: 'phone', type: 'string', defaultValue: '048-7123456'},
        {name: 'email', type: 'string', defaultValue: 'dow@mail.ua'},
        {name: 'address', type: 'string', defaultValue: 'Kiev, Bankovskay Street 1, app.13'},
        {name: 'modyfiedBy', type: 'string', defaultValue: 'mainadmin'},
        {name: 'modyfiedWhen', type: 'date', dateFormat: 'm/d/Y', defaultValue: '11/12/2012'}
    ]
});
