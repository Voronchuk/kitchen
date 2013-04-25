Ext.define('LawerAdminApp.view.center.service.TreePanel', {

    extend: 'Ext.tree.Panel',
    alias: 'widget.servicetreepanel',
    title: 'Services Tree',

    store: 'LawerAdminApp.store.ServicesTree',

    mixins : ['LawerAdminApp.controller.AddDeletable'],

    rootVisible: false,
    lines: false,
    multiSelect: false,
    selType: 'treemodel',

    plugins: [
        rowEditingTree = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 1,
            listeners: {
                beforeedit: function(e, editor){
                    var tpanel = Ext.getCmp('ServicesTree');
                    var sm = tpanel.getSelectionModel();
                    var node = sm.getSelection()[0];
                    if(editor.field=='name')return true;
                        return node.isLeaf();
                }
            }
        })
    ],

    tbar: [
        {
            text: 'Add',
            handler: function (){
                this.up().up().addNewNode();
            }
        },
        {
            text: 'Delete',
            handler: function (){
                this.up().up().deleteTreeSelection();
            }
        }
    ],

    columns: [
        {
            text: 'Id',
            flex: 1,
            sortable: true,
            dataIndex: 'id'
        },
        {
            xtype: 'treecolumn',
            text: 'Service',
            flex: 4,
            sortable: true,
            dataIndex: 'name',
            editor: {
                xtype: 'textfield',
                allowBlank: true
            }
        },
        {
            xtype: 'templatecolumn',
            text: 'Sharing',
            width: 100,
            sortable: true,
            dataIndex: 'sharing',
            align: 'center',
            tpl: SimpleColumnTemplateForTree('{sharing:this.format}'),
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
                minValue: 0,
                maxValue: 100,
                width: 100,

            }
        }
        ,
        {
            xtype: 'templatecolumn',
            text: 'Price',
            width: 100,
            sortable: true,
            dataIndex: 'price',
            align: 'center',
            tpl: SimpleColumnTemplateForTree('{price:this.format}'),
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
                minValue: 0,
                maxValue: 100000,
                width: 100
            }
        }
    ]

})



