var myServices = {
    "total": "7",
    "services": [
        {
            "id": "0",
            "name": "Consulting on lawer services",
            "description": "Preliminary consulting on services, prices and deals ",
            "price": "0"
        },
        {
            "id": "1",
            "name": "Advising on financial products,",
            "description": "Advising on the full range of financial products, syndicated loans, loan participation notes, project financing, financing of stock ",
            "price": "897"
        },
        {
            "id": "2",
            "name": "Drafting of loan and credit agreements",
            "description": "Drafting of various loan and credit facilities agreements for servicing debt financing transactions",
            "price": "12000"
        },
        {
            "id": "3",
            "name": "Drafting of contracts",
            "description": "Drafting of contracts ensuring/guaranteeing the fulfillment of borrower’s obligations under loan and credit facility agreements",
            "price": "76"
        },
        {
            "id": "4",
            "name": "Participation in negotiations",
            "description": "Participation in negotiations with parties to deals on debt financing",
            "price": "2"
        },
        {
            "id": "5",
            "name": "Advising clients on intellectual property rights",
            "description": "Advising clients on matters involving assignment or acquisition of intellectual property rights",
            "price": "0"
        },
        {
            "id": "6",
            "name": "Developing strategies of protection of rights",
            "description": "Developing strategies and schemes of protection of rights in industrial property objects",
            "price": "10"
        }
    ]
}
Ext.define('LawerAdminApp.store.Service', {
    extend: 'Ext.data.Store',
    requires: ['LawerAdminApp.model.Service'],
    storeId: 'Service',
    model: 'LawerAdminApp.model.Service',
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'services',
            totalProperty: 'total'
        }
    },
    data: myServices
});
