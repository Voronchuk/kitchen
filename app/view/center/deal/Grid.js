Ext.define('LawerAdminApp.view.center.deal.Grid', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.dealgrid',
    title: 'Practice',

    mixins : ['LawerAdminApp.controller.AddDeletable'],

    store: 'LawerAdminApp.store.Deal',

    plugins: [rowEditingDeal = Ext.create('Ext.grid.plugin.RowEditing', {clicksToEdit: 1})],

    tbar: [
        {
            text: 'Add',
            handler: function ()
            {
                this.up().up().addNew('DealGrid', 'LawerAdminApp.store.Deal','LawerAdminApp.model.Deal', myDeals.deals, rowEditingDeal)
            }
        },
        {
            text: 'Delete',
            handler: function ()
            {
                this.up().up().deleteSelection('DealGrid', 'LawerAdminApp.store.Deal', myDeals.deals);
            }
        }
    ],

    columns: [
        {
            header: 'ID',
            dataIndex: 'id'
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
        }
    ]

 });