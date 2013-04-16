Ext.define('LawerAdminApp.controller.Deal', {

    extend: 'Ext.app.Controller',

    mixins: ['LawerAdminApp.controller.FilterFunctionsForLinkedStores'],

    stores: [
        'LawerAdminApp.store.Lawer',
        'LawerAdminApp.store.Deal',
        'LawerAdminApp.store.Client',
        'LawerAdminApp.store.ServicesTree'
    ],

    init: function ()
    {
        this.control({
            '.dealgrid': {
                selectionchange: this.onDealSelectionChanged,
            }
        });
    },

    onDealSelectionChanged: function ()
    {
            var servicesTree = Ext.getStore('DealDetailsServices');
            var dealStore = Ext.getStore('LawerAdminApp.store.Deal');
            var lastSelected = Ext.getCmp('DealGrid').getSelectionModel().getLastSelected();
            if (!lastSelected)
            {
                return;
            }
            var dealId = parseInt(lastSelected.internalId);
            var r = dealStore.getById(dealId);
            if (!r)
            {
                return;
            }
            var record = r.data;
            var description = record.description;
            var number = record.id;
            var dealDetails = Ext.getCmp('DealDetails');
            dealDetails.setTitle('Details of Deal#' + number + ' ' + description);
            this.setOneItemFilterAndLoadDataFor3Stores(dealId);
            this.filterServicesTreeStoreUsingStoreBy(servicesTree, dealStore, 'id', dealId);
    }

});
