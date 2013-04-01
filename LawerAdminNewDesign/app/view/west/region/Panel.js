Ext.define('LawerAdminApp.view.west.region.Panel', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.regionpanel',
    requires: [
        'Ext.data.TreeStore',
        'LawerAdminApp.store.regionDepartmentsTree',
    ],
    rootVisible: false,
    useArrows: true,
    title: 'Regions and Departments',
    initComponent: function ()
    {
        Ext.apply(this, {
            store: 'LawerAdminApp.store.regionDepartmentsTree',
            tbar: [
                {
                    text: 'Filter Lawers by Regions',
                    scope: this,
                    handler: this.onCheckedNodesClick
                }
            ]
        });
        this.callParent();
    },
    onCheckedNodesClick: function ()
    {
        console.log();
        var treeView = this.getView();
        console.log('treePanel=%o', treeView);
        var treeStore = treeView.getTreeStore();
        console.log('treeStore=%o', treeStore)
        var root = treeStore.getRootNode();
        pathsFromTreeRootNode(root);
//        console.log('root=%o  regionDepartmentsTree=%o', root,regionDepartmentsTree);
//        var records = treeView.getChecked(),
//            names = [];
//        console.log('records=%o', records);
//        Ext.Array.each(records, function (rec)
//        {
//            names.push(rec.get('text'));
//        });
//        Ext.MessageBox.show({
//            title: 'Selected Nodes',
//            msg: names.join('<br />'),
//            icon: Ext.MessageBox.INFO
//        });
    }
})

