Ext.define('LawerAdminApp.model.Lawer', {

        extend: 'Ext.data.Model',

        fields: [
            {name: 'id', type: 'int'},
            {name: 'lastname', type: 'string', defaultValue: 'lastname'},
            {name: 'firstname', type: 'string', defaultValue: 'firstname'},
            {name: 'nick', type: 'string', defaultValue: 'nick'},
            {name: 'pass', type: 'string', defaultValue: 'pass'},
            {name: 'cap', type: 'string', defaultValue: 'Lawer'},
            {name: 'division', type: 'string', defaultValue: 'World'},
            {name: 'email', type: 'string', defaultValue: 'lawer@email.com'},
            {name: 'accessLevel', type: 'int', defaultValue: '0'},
            {name: 'currentStatus', type: 'string', defaultValue: 'Available'},
            {name: 'modyfiedBy', type: 'string', defaultValue: 'mainadmin'},
            {name: 'modyfiedWhen', type: 'date', dateFormat: 'm/d/Y', defaultValue: new Date()},
        ]
    }

);
