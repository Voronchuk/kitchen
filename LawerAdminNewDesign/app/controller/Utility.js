Ext.define('LawerAdminApp.controller.Utility', {
    extend: 'Ext.app.Controller'});


var baseStoresNameInMenu = [
    'LawerAdminApp.store.Lawer',
    'LawerAdminApp.store.Client',
    'LawerAdminApp.store.Service',
    'LawerAdminApp.store.Deal',
];
var result = [];
var regionDepartmentsFilterData = ['World'];

function pathsFromTreeRootNode(root)
{
    regionDepartmentsFilterData = ['World'];
    recursiveTracing(root);
    var StoreToFilter = Ext.getStore('LawerAdminApp.store.Lawer');
    StoreToFilter.clearFilter();
    StoreToFilter.filterBy(function (record, recordId)
    {
        return regionDepartmentsFilterData.indexOf(record.data.division) > -1;
    });
}

function recursiveTracing(currentNode)
{
    var data = currentNode.data;
    var Nodes = currentNode.childNodes;
    if (!data || !data.checked || Nodes.length == 0)
    {
        result.push(data.text);
        var s = result.slice(2).join('/');
        result.pop();
        regionDepartmentsFilterData.push(s);
        return;
    }
    result.push(data.text);
    for (var i in Nodes)
    {
        var node = Nodes[i];
        recursiveTracing(node, result)
    }
    result.pop();
}


function fnInitialSelectGrid(NameGrid)
{
    return function ()
    {
        var grid = Ext.getCmp(NameGrid);
        var sm;
        if (grid)
        {
            sm = grid.getSelectionModel();
        }
        if (sm)
        {
            sm.select(0);
        }
    }
};


function deleteSelection(gridName, storeName, myDataArray)
{
    var grid = Ext.getCmp(gridName);
    var store = Ext.getStore(storeName);
    var sm = grid.getSelectionModel();
    rowEditing.cancelEdit();
    var selection = sm.getSelection();
    if (selection.length == 0)
    {
        return;
    }
    var index = selection[0].index;
    var indexInStore = 0;
    if (index)
    {
        indexInStore = index;
    }
    store.remove(indexInStore);
    myDataArray.splice(indexInStore, 1);
    store.load();
    if (index >= 1)
    {
        sm.select(index - 1);
    }
    else
    {
        sm.select(0);
    }
};


function clearFiltersForAllBaseStores()
{
    Ext.Array.each(baseStoresNameInMenu, function (storeName)
    {
        var store = Ext.getStore(storeName);
        store.clearFilter();
        store.load();
    });
};


function setFilterAndLoadDataForStore(IdName, Id, StoreName, FieldNameInStore)
{
    var StoreToFilter = Ext.getStore(StoreName);
    var dealStore = Ext.getStore('LawerAdminApp.store.Deal');
    var Ids = [-1];
    dealStore.clearFilter();
    dealStore.filterBy(function (record)
    {
        var isEq = (record.data[IdName] == Id);
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
}


function setOneItemFilterAndLoadDataFor3Stores(Id)
{
    var LawerStoreToFilter = Ext.getStore('LawerAdminApp.store.DealDetails.Lawer');
    var ClientStoreToFilter = Ext.getStore('LawerAdminApp.store.DealDetails.Client');
    var ServiceStoreToFilter = Ext.getStore('LawerAdminApp.store.DealDetails.Service');
    LawerStoreToFilter.clearFilter();
    ClientStoreToFilter.clearFilter();
    ServiceStoreToFilter.clearFilter();
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
    LawerStoreToFilter.filter({property: 'id', value: filterValueForLawerStore, exactMatch: true});
    LawerStoreToFilter.load();
    ClientStoreToFilter.filter({property: 'id', value: filterValueForClientStore, exactMatch: true});
    ClientStoreToFilter.load();
    ServiceStoreToFilter.filter({property: 'id', value: filterValueForServiceStore, exactMatch: true});
    ServiceStoreToFilter.load();
}


function setActiveComponentsFromTwoLevelMenu(selectedData)
{
    var centerPanelLayout = Ext.getCmp('center').getLayout();

    function level0(index)
    {
        centerPanelLayout.setActiveItem(index);
    };
    function level1(index)
    {
        centerPanelLayout.getActiveItem().setActiveTab(index);
    };
    var setActiveComponentOnLevel = [ level0, level1];
    var ids = (selectedData.id).split('.');
    for (i = 0; i < ids.length; i++)
    {
        setActiveComponentOnLevel[i](parseInt(ids[i]));
    }
}


function onLawerSelection()
{
    var lawerStore = Ext.getStore('LawerAdminApp.store.Lawer');
    var lastSelected = Ext.getCmp('LawerGrid').getSelectionModel().getLastSelected();
    if (!lastSelected)
    {
        return;
    }
    var lawerId = parseInt(lastSelected.internalId); //index;
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
    setFilterAndLoadDataForStore('lawer_id', lawerId, 'LawerAdminApp.store.LawerDetails.Client', 'client_id');
    setFilterAndLoadDataForStore('lawer_id', lawerId, 'LawerAdminApp.store.LawerDetails.Service', 'service_id');
    setFilterAndLoadDataForStore('lawer_id', lawerId, 'LawerAdminApp.store.LawerDetails.Deal', 'id');
}


function onClientSelection()
{
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
    setFilterAndLoadDataForStore('client_id', clientId, 'LawerAdminApp.store.ClientDetails.Lawer', 'lawer_id');
    setFilterAndLoadDataForStore('client_id', clientId, 'LawerAdminApp.store.ClientDetails.Service', 'service_id');
    setFilterAndLoadDataForStore('client_id', clientId, 'LawerAdminApp.store.ClientDetails.Deal', 'id');
}


function onDealSelection()
{
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
    setOneItemFilterAndLoadDataFor3Stores(dealId);
}
