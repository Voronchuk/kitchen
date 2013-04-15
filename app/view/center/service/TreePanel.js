Ext.define('LawerAdminApp.view.center.service.TreePanel', {

    extend: 'Ext.tree.Panel',
    alias: 'widget.servicetreepanel',
    title: 'Services Tree',

    store: 'LawerAdminApp.store.ServicesTree',

    rootVisible: false,
    lines: false,
    multiSelect: false,
    selType: 'treemodel',

    plugins: [Ext.create('Ext.grid.plugin.CellEditing', {clicksToEdit: 1})],

    tbar: [
        {
            xtype: 'button',
            text: 'Add',
            handler: function (){}
        },
        {
            xtype: 'button',
            text: 'Delete',
            handler: function (){}
        }
    ],

    initComponent: function (config)
    {
        var me = this;
        me.columns = [
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
                flex: 1,
                sortable: true,
                dataIndex: 'sharing',
                align: 'center',
                tpl: me.SimpleColumnTemplateForTree('{sharing:this.format}'),
            }
            ,
            {
                xtype: 'templatecolumn',
                text: 'Price',
                flex: 1,
                sortable: true,
                dataIndex: 'price',
                align: 'center',
                tpl: me.SimpleColumnTemplateForTree('{price:this.format}'),
            },
        ];
        Ext.apply(me, config);
        me.callParent(arguments);
    },

    SimpleColumnTemplateForTree: function (dataIndex_FormatFunctionName)
    {
        return Ext.create('Ext.XTemplate',
            dataIndex_FormatFunctionName,
            {
                format: function (v)
                {
                    if (v == '0')
                    {
                        return '';
                    }
                    else
                    {
                        return v;
                    }
                }
            }
        );
    }

})



