Ext.define('LawerAdminApp.store.Divisions', {
    extend: 'Ext.data.Store',
    storeId: 'Divisions',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'accessLevel', type: 'int', defaultValue: 0    },
        {name: 'division', type: 'string', defaultValue: ''}
    ],
    data: [
        {id: 1, accessLevel: 0, division: "Ukraine/Odessa"                       },
        {id: 2, accessLevel: 0, division: "Ukraine/Kiev"                         },
        {id: 3, accessLevel: 0, division: "Germany/Berlin"                       },
        {id: 4, accessLevel: 0, division: "Germany/Düsseldorf"                   },
        {id: 5, accessLevel: 0, division: "Germany/Frankfurt"                    },
        {id: 6, accessLevel: 0, division: "Russia Federation/Moscow"             },
        {id: 7, accessLevel: 0, division: "Russia Federation/Saint Petersburg"   },
        {id: 8, accessLevel: 1, division: "United States of America/Washington"  },
        {id: 9, accessLevel: 0, division: "United States of America/Texas/Odessa"},
        {id: 10, accessLevel: 1, division: "Ukraine"                              },
        {id: 11, accessLevel: 1, division: "Russia Federation"                    },
        {id: 12, accessLevel: 1, division: "Germany"                              },
        {id: 13, accessLevel: 1, division: "United States of America"             },
        {id: 14, accessLevel: 2, division: "World"                                },
    ]
});
