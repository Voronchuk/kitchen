Ext.define('LawerAdminApp.controller.Service', {

    extend: 'Ext.app.Controller',

    mixins: ['LawerAdminApp.controller.FilterFunctionsForLinkedStores'],

    stores: [
        'LawerAdminApp.store.Lawer',
        'LawerAdminApp.store.Deal',
        'LawerAdminApp.store.Client',
        'LawerAdminApp.store.ServicesTree',
        'LawerAdminApp.store.ServicesTree'
    ],

    init: function ()
    {
        this.control({
            '#ServicesTree': {
                selectionchange: this.onServiceSelectionChanged
            }
        });
    },

    onServiceSelectionChanged: function ()
    {
        var filterDeal=Ext.getStore('LawerAdminApp.store.Deal');
        var filterLawerService=Ext.getStore('LawerAdminApp.store.LawerService');
        var clientDetails = Ext.getStore('ServiceDetailsClient');
        var dealDetails = Ext.getStore('ServiceDetailsDeal');
        var lawerDetails = Ext.getStore('ServiceDetailsLawer');
        var allLawerDetails = Ext.getStore('ServiceDetailsAllLawer');
        var lastSelected = Ext.getCmp('ServicesTree').getSelectionModel().getLastSelected();
        if (!lastSelected)
        {
            return;
        }
        var serviceId = lastSelected.internalId;
        var selectedData = lastSelected.data;
        var serviceName = selectedData.name;
        var serviceDetails = Ext.getCmp('ServiceDetails');
        serviceDetails.setTitle('Details of ' + serviceName);
        this.setFilterAndLoadDataForStore('service_id', serviceId, clientDetails, filterDeal, 'client_id');
        this.setFilterAndLoadDataForStore('service_id', serviceId, dealDetails, filterDeal, 'id');
        this.setFilterAndLoadDataForStore('service_id', serviceId, lawerDetails, filterDeal, 'lawer_id');
        this.setFilterAndLoadDataForStore('service_id', serviceId, allLawerDetails, filterLawerService, 'lawer_id');
    }

});
