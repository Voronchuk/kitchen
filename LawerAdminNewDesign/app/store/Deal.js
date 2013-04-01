var myDeals = {
    "total":"26",
    "deals":[
        {"id": "0",  'description': "  Holms deal  on  Moriarty Question                     ",    "lawer_id": "0",    "client_id": "0",   "service_id": "1",  "start": "03/01/2012",    "end": "03/01/2012",  "status":"completed",   "cost":"100"  },
        {"id": "1",                                                                                "lawer_id": "1",    "client_id": "1",   "service_id": "2",  "start": "03/01/2012",    "end": "03/01/2012",  "status":"completed",   "cost":"0"  },
        {"id": "2",                                                                                "lawer_id": "2",    "client_id": "2",   "service_id": "3",  "start": "03/01/2012",    "end": "03/01/2012",  "status":"completed",   "cost":"0"  },
        {"id": "3",   'description': "   Dr. Watson lost boots                               ",    "lawer_id": "3",    "client_id": "3",   "service_id": "0",  "start": "03/01/2012",    "end": "03/01/2012",  "status":"opened",      "cost":"5"  },
        {"id": "4",   'description': "   Prof. Preobrazhensky Deal                           ",    "lawer_id": "1",    "client_id": "4",   "service_id": "4",  "start": "03/01/2012",    "end": "03/01/2012",  "status":"completed",   "cost":"100"  },
        {"id": "5",   'description': "   Queen offending                                     ",    "lawer_id": "0",    "client_id": "5",   "service_id": "5",  "start": "03/01/2012",    "end": "03/01/2012",  "status":"completed",   "cost":"9999"  },
        {"id": "6",                                                                                "lawer_id": "6",    "client_id": "6",   "service_id": "6",  "start": "03/01/2012",    "end": "03/01/2012",  "status":"completed",   "cost":"0"  },
        {"id": "7",                                                                                "lawer_id": "7",    "client_id": "0",   "service_id": "1",  "start": "03/01/2012",    "end": "03/01/2012",  "status":"completed",   "cost":"0"  },
        {"id": "8",                                                                                "lawer_id": "8",    "client_id": "1",   "service_id": "3",  "start": "03/01/2012",    "end": "03/01/2012",  "status":"completed",   "cost":"0"  },
        {"id": "9",                                                                                "lawer_id": "9",    "client_id": "2",   "service_id": "4",  "start": "03/01/2012",    "end": "03/01/2012",  "status":"completed",   "cost":"0"  },
        {"id": "10",                                                                               "lawer_id": "10",   "client_id": "4",   "service_id": "2",  "start": "03/01/2012",    "end": "03/01/2012",  "status":"completed",   "cost":"0"  },
        {"id": "11",                                                                               "lawer_id": "11",   "client_id": "6",   "service_id": "3",  "start": "03/01/2012",    "end": "03/01/2012",  "status":"completed",   "cost":"0"  },
        {"id": "12",                                                                               "lawer_id": "12",   "client_id": "3",   "service_id": "5",  "start": "03/01/2012",    "end": "03/01/2012",  "status":"completed",   "cost":"0"  },
        {"id": "13",                                                                               "lawer_id": "13",   "client_id": "2",   "service_id": "6",  "start": "03/01/2012",    "end": "03/01/2012",  "status":"completed",   "cost":"0"  },
        {"id": "14",                                                                               "lawer_id": "14",   "client_id": "3",   "service_id": "4",  "start": "03/01/2012",    "end": "03/01/2012",  "status":"completed",   "cost":"0"  },
        {"id": "15",                                                                               "lawer_id": "15",   "client_id": "0",   "service_id": "5",  "start": "03/01/2012",    "end": "03/01/2012",  "status":"completed",   "cost":"0"  },
    ]
}
Ext.define('LawerAdminApp.store.Deal', {
    extend: 'Ext.data.Store',
    requires: ['LawerAdminApp.model.Deal'],
    storeId: 'Deal',
    model: 'LawerAdminApp.model.Deal',
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'deals',
            totalProperty: 'total'
        }
    },
    autosync: true,
    data: myDeals
});
