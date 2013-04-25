Ext.define('LawerAdminApp.controller.Lawer', {

    extend: 'Ext.app.Controller',

    mixins: ['LawerAdminApp.controller.FilterFunctionsForLinkedStores'],

    stores: [
        'LawerAdminApp.store.Lawer',
        'LawerAdminApp.store.Client',
        'LawerAdminApp.store.Deal',
        'LawerAdminApp.store.ServicesTree'
    ],

    init: function ()
    {
        this.control({
            '.lawergrid': {
                selectionchange: this.onLawerSelectionChanged
            }
        });
    },

    onLawerSelectionChanged: function ()
    {
        var filterDeal=Ext.getStore('LawerAdminApp.store.Deal');
        var filterLawerService = Ext.getStore('LawerAdminApp.store.LawerService');
        var clientDetails = Ext.getStore('LawerDetailsClient');
        var dealDetails = Ext.getStore('LawerDetailsDeal');
        var servicesTree = Ext.getStore('LawerServicesDetails');
        var allServicesTree = Ext.getStore('LawerAllServicesDetails');
        var lawerStore = Ext.getStore('LawerAdminApp.store.Lawer');
        var lastSelected = Ext.getCmp('LawerGrid').getSelectionModel().getLastSelected();
        if (!lastSelected)
        {
            return;
        }
        var lawerId = parseInt(lastSelected.internalId);
        var r = lawerStore.getById(lawerId);
        if (!r)
        {
            return;
        }
        var record = r.data;
        var lawerFirstName = record.firstname;
        var lawerLastName = record.lastname;
        var lawerDetails = Ext.getCmp('LawerDetails');
        lawerDetails.setTitle('Details of ' + lawerFirstName + ' ' + lawerLastName);
        this.setFilterAndLoadDataForStore('lawer_id', lawerId, clientDetails, filterDeal, 'client_id');
        this.setFilterAndLoadDataForStore('lawer_id', lawerId, dealDetails, filterDeal, 'id');
        this.filterServicesTreeStoreUsingStoreBy(servicesTree, filterDeal, 'lawer_id', lawerId);
        this.filterServicesTreeStoreUsingStoreBy(allServicesTree, filterLawerService, 'lawer_id', lawerId);
    }

});
