Ext.define('LawerAdminApp.model.Lawer', {
        extend: 'Ext.data.Model',
        fields: [
            {name: 'id', type: 'int'},
            {name: 'lastname', type: 'string', defaultValue: 'miller'},
            {name: 'firstname', type: 'string', defaultValue: 'samuel'},
            {name: 'nick', type: 'string', defaultValue: 'miller'},
            {name: 'pass', type: 'string', defaultValue: 'miller'},
            {name: 'cap', type: 'string', defaultValue: 'Lawer'},
            {name: 'division', type: 'string', defaultValue: 'Ukraine'},
            {name: 'email', type: 'string', defaultValue: 'somebody@lawyer.com'},
            {name: 'accessLevel', type: 'int', defaultValue: '0'},
            {name: 'currentStatus', type: 'string', defaultValue: 'Busy'},
            {name: 'modyfiedBy', type: 'string', defaultValue: 'mainadmin'},
            {name: 'modyfiedWhen', type: 'date', dateFormat: 'm/d/Y', defaultValue: '11/12/2012'},
        ]
    }
);
