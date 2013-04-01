var myLawerServices = {
    "total": "6",
    "lawer_services": [
        {
            "id": "1",
            "lawer_id": "1",
            "service_id": "4"
        },
        {
            "id": "2",
            "lawer_id": "2",
            "service_id": "1"
        },
        {
            "id": "3",
            "lawer_id": "2",
            "service_id": "2"
        },
        {
            "id": "4",
            "lawer_id": "3",
            "service_id": "6"
        },
        {
            "id": "5",
            "lawer_id": "4",
            "service_id": "3"
        },
        {
            "id": "6",
            "lawer_id": "5",
            "service_id": "5"
        }
    ]
}
Ext.define('LawerAdminApp.store.LawerService', {
    extend: 'Ext.data.Store',
    requires: [
        'LawerAdminApp.model.Lawer',
        'LawerAdminApp.model.LawerService',
        'LawerAdminApp.model.Service'
    ],
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
