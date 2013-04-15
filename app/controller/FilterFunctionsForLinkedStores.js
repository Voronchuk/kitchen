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
        var filterValueForServiceStore = -1;
        var dealStore = Ext.getStore('LawerAdminApp.store.Deal');
        var r = dealStore.getById(Id);
        if (r)
        {
            filterValueForLawerStore = r.data.lawer_id;
            filterValueForClientStore = r.data.client_id;
            filterValueForServiceStore = r.data.service_id;
        }
        lawerDetails.filter({property: 'id', value: filterValueForLawerStore, exactMatch: true});
        lawerDetails.load();
        clientDetails.filter({property: 'id', value: filterValueForClientStore, exactMatch: true});
        clientDetails.load();
        serviceDetails.filter({property: 'id', value: filterValueForServiceStore, exactMatch: true});
//        serviceDetails.load();
    },

    filterServicesTreeStoreUsingDealStoreBy: function (treeStore, IdName, idValue)
    {
        var meMixin = this;
        idValues = meMixin.getServicesValuesFromDealStoreBy(IdName, idValue);
        var root = treeStore.getRootNode();
        var newRoot = copyFilteredByIdsJSONObj(myServicesTree0,idValues);
        treeStore.setRootNode(newRoot);
    },

    getServicesValuesFromDealStoreBy: function (IdName, idValue)
    {
        var dealStore = Ext.getStore('LawerAdminApp.store.Deal');
        var Ids = [];
        dealStore.clearFilter();
        dealStore.filterBy(function (record)
        {
            var isEq = (record.data[IdName] == idValue);
            if (isEq)
            {
                Ids.push(record.data['service_id']);
            }
            return isEq;
        });
        return Ids;
    },

    traceTreeAndFilterPathsToLeafNodesByIdValues: function (currentNode)
    {
        var childNodes ;
        var leaf ;
        var found = false;

        if (!currentNode)
        {
            return found;
        }
        var data = currentNode.data;
        if (!data)
        {
            return  found;
        }
        childNodes = currentNode.childNodes;
        leaf = (data.leaf);
        if (childNodes.length == 0 || leaf)
        {
            if (leaf)
            {
                found = (idValues.indexOf(data.id) > -1);
                if (found)
                {
                    currentNode.expand();
                    return found;
                }
                else
                {
                    currentNode.data = null;
                    return found;
                }
            }
            return found;
        }
        for (var i in childNodes)
        {
            found |= this.traceTreeAndFilterPathsToLeafNodesByIdValues(childNodes[i]);
        }
        if (found)
        {
            currentNode.expand();
        }
        else
        {
            currentNode.data = null;
            childNodes.splice(0,childNodes.length);
        }
        return found;
    }

});

