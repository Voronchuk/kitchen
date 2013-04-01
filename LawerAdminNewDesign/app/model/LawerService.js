Ext.define('LawerAdminApp.model.LawerService', {
    extend: 'Ext.data.Model',
    requires: [
        'LawerAdminApp.model.Lawer',
        'LawerAdminApp.model.Service'
    ],
    fields: [
        {name: 'id', type: 'int'},
        {name: 'lawer_id', type: 'int'},
        {name: 'service_id', type: 'int'},
    ],
    hasMany: [
        {model: 'LawerAdminApp.model.Lawer', name: 'lawers', foreignKey: 'id'},
        {model: 'LawerAdminApp.model.Service', name: 'services', foreignKey: 'id'}
    ]
});
