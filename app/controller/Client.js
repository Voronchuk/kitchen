Ext.define('LawerAdminApp.controller.Client', {

    extend: 'Ext.app.Controller',

    mixins: ['LawerAdminApp.controller.FilterFunctionsForLinkedStores'],

    stores: [
        'LawerAdminApp.store.Lawer',
        'LawerAdminApp.store.Client',
        'LawerAdminApp.store.Deal',
        'LawerAdminApp.store.ServicesTree',
    ],

    init: function ()
    {
        this.control({
            '.clientgrid': {
                selectionchange: this.onClientSelectionChanged,
            }
        });
    },

    onClientSelectionChanged: function ()
    {
        var filterDeal = Ext.getStore('LawerAdminApp.store.Deal');
        var lawerDetails = Ext.getStore('ClientDetailsLawer');
        var dealDetails = Ext.getStore('ClientDetailsDeal');
        var servicesTree = Ext.getStore('ClientServicesDetails');
        var clientStore = Ext.getStore('LawerAdminApp.store.Client');
        var lastSelected = Ext.getCmp('ClientGrid').getSelectionModel().getLastSelected();
        if (!lastSelected)
        {
            return;
        }
        var clientId = parseInt(lastSelected.internalId);
        var r = clientStore.getById(clientId);
        if (!r)
        {
            return;
        }
        var record = r.data;
        var clientFirstName = record.firstname;
        var clientLastName = record.lastname;
        var clientDetails = Ext.getCmp('ClientDetails');
        clientDetails.setTitle('Details of ' + clientFirstName + ' ' + clientLastName);
        this.setFilterAndLoadDataForStore('client_id', clientId, lawerDetails, filterDeal, 'lawer_id');
        this.setFilterAndLoadDataForStore('client_id', clientId, dealDetails, filterDeal, 'id');
        this.filterServicesTreeStoreUsingDealStoreBy(servicesTree, 'client_id', clientId);
    }

});
