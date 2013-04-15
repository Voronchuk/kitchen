Ext.define('LawerAdminApp.controller.Region', {

    extend: 'Ext.app.Controller',

    mixins: ['LawerAdminApp.controller.FilterFunctionsForLinkedStores'],

    stores: ['LawerAdminApp.store.regionDepartmentsTree'],

    init: function ()
    {
        this.control({
            '#RegionPanel': {
                checkchange: this.onCheckChange
            }
        });
    },

    onCheckChange: function (node, checked, eOpts)
    {
        var treeStore = Ext.getStore('LawerAdminApp.store.regionDepartmentsTree');
        var root = treeStore.getRootNode();
        this.pathsFromTreeRootNode(root);
    },

    pathsFromTreeRootNode: function (root)
    {
        regionDepartmentsTreePath = [];
        regionDepartmentsFilterData = ['World'];
        this.recursiveTracing(root);
        var StoreToFilter = Ext.getStore('LawerAdminApp.store.Lawer');
        this.clearFiltersForAllBaseStores();
        StoreToFilter.filterBy(function (record, recordId)
        {
            return regionDepartmentsFilterData.indexOf(record.data.division) > -1;
        });
    },

    recursiveTracing: function (currentNode)
    {
        var data = currentNode.data;
        var Nodes = currentNode.childNodes;
        var nlz = (Nodes.length == '0');
        var dc = (data.checked);
        if (!dc || nlz)
        {
            if (dc)
            {
                regionDepartmentsTreePath.push(data.text);
            }
            var s = regionDepartmentsTreePath.slice(2).join('/');
            if (dc)
            {
                regionDepartmentsTreePath.pop();
            }
            regionDepartmentsFilterData.push(s);
            return;
        }
        regionDepartmentsTreePath.push(data.text);
        for (var i in Nodes)
        {
            this.recursiveTracing(Nodes[i])
        }
        regionDepartmentsTreePath.pop();
    }

});


