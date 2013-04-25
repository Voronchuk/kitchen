Ext.define('LawerAdminApp.controller.AddDeletable', {

    deleteSelection: function (gridName, storeName, myDataArray)
    {
        Ext.Msg.show({
            title: 'Delete?',
            msg: 'Are you sure you want to delete?',
            buttons: Ext.Msg.YESNO,
            fn: function (response)
            {
                if (response === 'yes')
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
                }
            }
        })
    },


    addNew: function (gridName, storeName, modelName, myDataArray, rowEditing)
    {

        var store = Ext.getStore(storeName);
        var grid = Ext.getCmp(gridName);
        var r = Ext.create(modelName, {
            id: '' + store.count()
        });
        store.add(r);
        myDataArray.push(r);
        var last = store.last().data.id;
        grid.getSelectionModel().select(last);
        rowEditing.startEdit(last, 1);
    },


    deleteTreeSelection: function ()
    {
        Ext.Msg.show({
            title: 'Delete?',
            msg: 'Are you sure you want to delete?',
            buttons: Ext.Msg.YESNO,
            fn: function (response)
            {
                if (response === 'yes')
                {

                    var tpanel = Ext.getCmp('ServicesTree');
                    var list = tpanel.getSelectionModel().getSelection()[0]
                    list.parentNode.removeChild(list);
                }
            }
        })
    },


    newIdForNodeToInsertAfter : function(lastNode)
    {
        var id = lastNode.data.id;
        var ids = id.split('.');
        var l = ids.length-1;
        var  newLastIdPart = parseInt(ids[l])+1;
        ids[l] = newLastIdPart;
        id = ids.join('.');
        return id;
    },

    addNewNode: function ()
    {
        var tpanel = Ext.getCmp('ServicesTree');
        var sm = tpanel.getSelectionModel();
        var node = sm.getSelection()[0];
        var isExpanded = node.isExpanded();
        var firstChild = isExpanded ? node.firstChild : node;
        var nodeToInsertAfter;
        var isLeaf = true;
        var newId;
        var newNode;
        var parentNode;
        if (node.isLeaf())
        {
            isLeaf = true;
            parentNode = node.parentNode;
            nodeToInsertAfter = parentNode.lastChild;
            newId = this.newIdForNodeToInsertAfter(nodeToInsertAfter);
            newNode = Ext.create('LawerAdminApp.model.ServiceTree', {
                id: newId,
                leaf: isLeaf
            });
            parentNode.appendChild(newNode);
            sm.select(newNode);
            rowEditingTree.startEdit(newNode, 1);
            return;
        }
        if (!firstChild)
        {
            Ext.Msg.show({
                title: 'Add new',
                buttons: Ext.Msg.YESNO,
                buttonText: {
                    yes: "Cathegory",
                    no: "Service"
                },
                fn: function (response)
                {
                    isLeaf = !(response === 'yes');
                    parentNode = node;
                    newId = parentNode.data.id + '.0';
                    newNode = Ext.create('LawerAdminApp.model.ServiceTree', {
                        id: newId,
                        leaf: isLeaf,
                        children: [],
                    });
                    parentNode.appendChild(newNode);
                    sm.select(newNode);
                    rowEditingTree.startEdit(newNode, 1);
                    return;
                }
            });
            return;
        }
        if (isExpanded)
        {
            isLeaf = firstChild.isLeaf();
            parentNode = node;
            nodeToInsertAfter = parentNode.lastChild;
            newId = this.newIdForNodeToInsertAfter(nodeToInsertAfter);
            newNode = Ext.create('LawerAdminApp.model.ServiceTree', {
                id: newId,
                leaf: isLeaf,
                children: []
            });
            parentNode.appendChild(newNode);
            sm.select(newNode);
            rowEditingTree.startEdit(newNode, 1);
            return;
        }
        isLeaf = firstChild.isLeaf();
        parentNode = node.parentNode;
        nodeToInsertAfter = parentNode.lastChild;
        newId = this.newIdForNodeToInsertAfter(nodeToInsertAfter);
        newNode = Ext.create('LawerAdminApp.model.ServiceTree', {
            id: newId,
            leaf: isLeaf,
            children: []
        });
        parentNode.appendChild(newNode);
        sm.select(newNode);
        rowEditingTree.startEdit(newNode, 1);
        return;
    }

});

