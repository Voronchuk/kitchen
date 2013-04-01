Ext.define('LawerAdminApp.model.Deal', {
    extend: 'Ext.data.Model',
    requires: [
        'LawerAdminApp.model.Lawer',
        'LawerAdminApp.model.Client',
        'LawerAdminApp.model.Service'
    ],
    fields: [
        {name: 'id', type: 'int'},
        {name: 'description', type: 'string', defaultValue: 'Preliminary Consulting on Common Questions' },
        {name: 'lawer_id', type: 'int', defaultValue: 1},
        {name: 'client_id', type: 'int', defaultValue: 1},
        {name: 'service_id', type: 'int', defaultValue: 0},
        {name: 'start', type: 'date', dateFormat: 'm/d/Y', defaultValue: new Date()},
        {name: 'end', type: 'date', dateFormat: 'm/d/Y', defaultValue: new Date()},
        {name: 'status', type: 'string', defaultValue: 'completed'},
        {name: 'cost', type: 'int', defaultValue: 999},
        {name: 'modyfiedBy', type: 'string', defaultValue: 'mainadmin'},
        {name: 'modyfiedWhen', type: 'date', dateFormat: 'm/d/Y', defaultValue: '11/12/2012'}
    ],
    hasMany: [
        {model: 'LawerAdminApp.model.Lawer', name: 'lawers', foreignKey: 'id'},
        {model: 'LawerAdminApp.model.Client', name: 'clients', foreignKey: 'id'},
        {model: 'LawerAdminApp.model.Service', name: 'services', foreignKey: 'id'},
    ]
});
