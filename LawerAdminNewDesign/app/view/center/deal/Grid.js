var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
    clicksToMoveEditor: 1,
    autoCancel: false
});

Ext.define('LawerAdminApp.view.center.deal.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.dealgrid',
    store: 'LawerAdminApp.store.Deal',
    title: 'Practice',
    tbar: [
        {
            xtype: 'button',
            text: 'Add',
            handler: function ()
            {
                store = Ext.getStore('LawerAdminApp.store.Deal');
                var r = Ext.create('LawerAdminApp.model.Deal', {
                    id: '' + store.count(),
                    lawer_id: 'NaN',
                    client_id: 'NaN',
                    service_id: 'NaN',
                    description: 'test',
                    status: 'test',
                    cost: 'NaN',
                    start: Ext.Date.clearTime(new Date()),
                    end: Ext.Date.clearTime(new Date()),
                    modyfiedBy: 'test',
                    modyfiedWhen: Ext.Date.clearTime(new Date())
                });
                store.add(r);
                myDeals.deals.push(r);
            }
        },
        {
            xtype: 'button',
            text: 'Delete',
            handler: function ()
            {
                deleteSelection('DealGrid', 'LawerAdminApp.store.Deal', myDeals.deals);
            }
        }
    ],
    activeItem : 0,
    columns: [
        {
            header: 'ID',
            dataIndex: 'id',
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
                minValue: 0,
                maxValue: 150000
            }
        },
        {
            header: 'Description',
            dataIndex: 'description',
            flex: 2,
            editor: {
                allowBlank: false
            }
        },
        {
            header: 'Lawer ID',
            dataIndex: 'lawer_id',
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
                minValue: 0,
                maxValue: 150000
            }
        },
        {
            header: 'Client ID',
            dataIndex: 'client_id',
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
                minValue: 0,
                maxValue: 150000
            }
        },
        {
            header: 'Service ID',
            dataIndex: 'service_id',
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
                minValue: 0,
                maxValue: 150000
            }
        },
        {
            header: 'Start',
            dataIndex: 'start',
            flex: 1,
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
        },
        {
            header: 'End',
            dataIndex: 'end',
            flex: 1,
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
        },
        {
            header: 'Status',
            dataIndex: 'status',
            flex: 1,
            editor: {
                allowBlank: false
            }
        },
        {
            header: 'Cost',
            dataIndex: 'cost',
            width: 80,
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
                minValue: 0,
                maxValue: 150000
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
    plugins: [rowEditing]
});