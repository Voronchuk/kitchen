Ext.define('LawerAdminApp.model.Deal', {

    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'description', type: 'string', defaultValue: 'description' },
        {name: 'lawer_id', type: 'int', defaultValue: ''},
        {name: 'client_id', type: 'int', defaultValue: ''},
        {name: 'service_id', type: 'string', defaultValue: '1.0.1'},
        {name: 'start', type: 'date', dateFormat: 'm/d/Y', defaultValue: new Date()},
        {name: 'end', type: 'date', dateFormat: 'm/d/Y', defaultValue: new Date()},
        {name: 'status', type: 'string', defaultValue: 'opened'},
        {name: 'cost', type: 'int', defaultValue: 0},
        {name: 'modyfiedBy', type: 'string', defaultValue: 'mainadmin'},
        {name: 'modyfiedWhen', type: 'date', dateFormat: 'm/d/Y', defaultValue: new Date()}
    ]

});
