Ext.define('LawerAdminApp.store.Cap', {
    extend: 'Ext.data.Store',
    storeId: 'Cap',
    fields: [
        {name: 'accessLevel', type: 'int', defaultValue: 0},
        {name: 'cap', type: 'string', defaultValue: 'Lawer'}
    ],
    data: [
        {accessLevel: 0, cap: "Lawer"                    },
        {accessLevel: 1, cap: "Office Lawer"          },
        {accessLevel: 2, cap: "Senjor Office Lawer"     }
    ]
});
