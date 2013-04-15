Ext.define('LawerAdminApp.store.ServicesTree', {

    extend: 'Ext.data.TreeStore',
    storeId: 'ServicesTree',

    model: 'LawerAdminApp.model.ServiceTree',

    root: myServicesTree,

});
