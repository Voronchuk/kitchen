Ext.define('LawerAdminApp.controller.AddDeletable', {

    deleteSelection: function (gridName, storeName, myDataArray)
    {
        var grid = Ext.getCmp(gridName);
        var store = Ext.getStore(storeName);
        var sm = grid.getSelectionModel();
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
    },


    addNew: function (storeName, modelName, myDataArray)
    {
        var store = Ext.getStore(storeName);
        var r = Ext.create(modelName, {
            id: '' + store.count()
        });
        store.add(r);
        myDataArray.push(r);
    }

});

