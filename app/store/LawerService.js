var myLawerServices = {
    "total": "19",
    "lawer_services": [
        {"id": "0",   "lawer_id": "0",     "service_id": "0.0"  },
        {"id": "1",   "lawer_id": "0",     "service_id": "0.2"  },
        {"id": "2",   "lawer_id": "3",     "service_id": "1.0.0"},
        {"id": "3",   "lawer_id": "4",     "service_id": "1.1.0"},
        {"id": "4",   "lawer_id": "5",     "service_id": "1.1.1"},
        {"id": "5",   "lawer_id": "6",     "service_id": "2.0.0"},
        {"id": "6",   "lawer_id": "7",     "service_id": "2.0.1"},
        {"id": "7",   "lawer_id": "8",     "service_id": "2.0.2"},
        {"id": "8",   "lawer_id": "9",     "service_id": "2.1.0"},
        {"id": "9",   "lawer_id": "10",    "service_id": "2.1.1"},
        {"id": "10",  "lawer_id": "11",    "service_id": "2.1.2"},
        {"id": "11",  "lawer_id": "1",     "service_id": "0.1"  },
        {"id": "12",  "lawer_id": "2",     "service_id": "0.3"  },
        {"id": "13",  "lawer_id": "3",     "service_id": "1.0.1"},
        {"id": "14",  "lawer_id": "4",     "service_id": "1.1.1"},
        {"id": "15",  "lawer_id": "5",     "service_id": "1.1.2"},
        {"id": "16",  "lawer_id": "6",     "service_id": "1.0.1"},
        {"id": "17",  "lawer_id": "7",     "service_id": "2.2.0"},
        {"id": "18",  "lawer_id": "8",     "service_id": "2.3.0"},
    ]
}

Ext.define('LawerAdminApp.store.LawerService', {

    extend: 'Ext.data.Store',
    storeId: 'LawerService',

    model: 'LawerAdminApp.model.LawerService',

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'lawer_services',
            totalProperty: 'total'
        }
    },

    data: myLawerServices

});
