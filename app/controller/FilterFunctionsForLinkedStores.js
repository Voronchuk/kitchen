Ext.define('LawerAdminApp.controller.FilterFunctionsForLinkedStores', {

    clearFiltersForAllBaseStores: function ()
    {
        var store;
        store = Ext.getStore('LawerAdminApp.store.Lawer');
        if (store)
        {
            store.clearFilter();
            store.load();
        }
        store = Ext.getStore('LawerAdminApp.store.Client');
        if (store)
        {
            store.clearFilter();
            store.load();
        }
        store = Ext.getStore('LawerAdminApp.store.Deal');
        if (store)
        {
            store.clearFilter();
            store.load();
        }
        clearAndInitAllServiceTreeStores();
    },


    setFilterAndLoadDataForStore: function (IdName, idValue, StoreName, FilterStore, FieldNameInStore)
    {
        var StoreToFilter = Ext.getStore(StoreName);
        var Filter = Ext.getStore(FilterStore);
        var Ids = [-1]; // default non existing value to filter all by 'nothing'
        Filter.clearFilter();
        Filter.filterBy(function (record)
        {
            var isEq = (record.data[IdName] == idValue);
            if (isEq)
            {
                Ids.push(record.data[FieldNameInStore]);
            }
            return isEq;
        });
        StoreToFilter.clearFilter();
        StoreToFilter.filterBy(function (record, recordId)
        {
            return Ids.indexOf(record.data.id) > -1;
        });
    },


    setOneItemFilterAndLoadDataFor3Stores: function (Id)
    {
        var clientDetails = Ext.getStore('DealDetailsClient');
        var lawerDetails = Ext.getStore('DealDetailsLawer');
        var serviceDetails = Ext.getStore('DealDetailsServices');
        lawerDetails.clearFilter();
        clientDetails.clearFilter();
        serviceDetails.clearFilter();
        var filterValueForLawerStore = -1;
        var filterValueForClientStore = -1;
        var filterValueForServiceTreeStore = '-1';
        var dealStore = Ext.getStore('LawerAdminApp.store.Deal');
        var r = dealStore.getById(Id);
        if (r)
        {
            filterValueForLawerStore = r.data.lawer_id;
            filterValueForClientStore = r.data.client_id;
            filterValueForServiceTreeStore = r.data.service_id;
        }
        lawerDetails.filter({property: 'id', value: filterValueForLawerStore, exactMatch: true});
        lawerDetails.load();
        clientDetails.filter({property: 'id', value: filterValueForClientStore, exactMatch: true});
        clientDetails.load();
        var IdValues = [];
        IdValues.push(filterValueForServiceTreeStore);
        var newRoot = copyFilteredByIdsJSONObj(myServicesTree0,idValues);
        serviceDetails.setRootNode(newRoot);

    },


    filterServicesTreeStoreUsingStoreBy: function (treeStore, FilterStore, IdName, idValue)
    {
        var meMixin = this;
        idValues = meMixin.getServicesValuesFromStoreBy(FilterStore, IdName, idValue);
        var newRoot = copyFilteredByIdsJSONObj(myServicesTree0,idValues);
        treeStore.setRootNode(newRoot);
    },

    getServicesValuesFromStoreBy: function (FilterStore, IdName, idValue)
    {
        var filter = Ext.getStore(FilterStore);
        var Ids = [];
        filter.clearFilter();
        filter.filterBy(function (record)
        {
            var isEq = (record.data[IdName] == idValue);
            if (isEq)
            {
                Ids.push(record.data['service_id']);
            }
            return isEq;
        });
        filter.clearFilter();
        return Ids;
    }
});

