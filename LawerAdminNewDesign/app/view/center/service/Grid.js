var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
    clicksToMoveEditor: 1,
    autoCancel: false
});
Ext.define('LawerAdminApp.view.center.service.Grid',
    {
        extend: 'Ext.grid.Panel',
        alias: 'widget.servicegrid',
        store: 'LawerAdminApp.store.Service',
        title: 'Services',
        tbar: [
            {
                xtype: 'button',
                text: 'Add',
                handler: function ()
                {
                    store = Ext.getStore('LawerAdminApp.store.Service');
                    var r = Ext.create('LawerAdminApp.model.Service', {
                        id: '' + store.count(),
                        name: 'test',
                        description: 'test',
                        sharing: 'NaN',
                        price: 'NaN',
                        modyfiedBy: 'test',
                        modyfiedWhen: Ext.Date.clearTime(new Date())
                    });
                    store.add(r);
                    myServices.services.push(r);
                }
            },
            {
                xtype: 'button',
                text: 'Delete',
                handler: function ()
                {
                    deleteSelection('ServiceGrid', 'LawerAdminApp.store.Service', myServices.services);
                }
            }
        ],
        columns: [
            {
                header: 'ID', dataIndex: 'id',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 150000
                }
            },
            {
                header: 'Name', dataIndex: 'name', flex: 1,
                editor: {
                    allowBlank: false
                }
            },
            {
                header: 'Description', dataIndex: 'description', flex: 2,
                editor: {
                    allowBlank: false
                }
            },
            {
                header: 'Price', dataIndex: 'price', width: 80,
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 150000
                }
            },
            {
                header: 'Sharing, %', dataIndex: 'sharing', width: 80,
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 100
                }
            },
            {
                header: 'Modyfied by',
                dataIndex: 'modyfiedBy',
                flex: 1,
                editor: {
                    allowBlank: false
                }
            },
            {
                header: 'Modyfied when',
                dataIndex: 'modyfiedWhen',
                flex: 2,
                xtype: 'datecolumn',
                format: 'm/d/Y',
                editor: {
                    xtype: 'datefield',
                    allowBlank: false,
                    format: 'm/d/Y',
                    minValue: '01/01/2006',
                    minText: 'Cannot have a start date before the company existed!',
                    maxValue: Ext.Date.format(new Date(), 'm/d/Y')
                }
            }
        ],
        plugins: [rowEditing],
    });
