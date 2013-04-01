var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
    clicksToMoveEditor: 1,
    autoCancel: false
});

Ext.define('LawerAdminApp.view.center.lawer.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.lawergrid',
    title: 'Lawers',
    store: 'LawerAdminApp.store.Lawer',
    tbar: [
        {
            xtype: 'button',
            text: 'Add',
            handler: function ()
            {
                store = Ext.getStore('LawerAdminApp.store.Lawer');
                var r = Ext.create('LawerAdminApp.model.Lawer', {
                    id: '' + store.count(),
                    lastname: 'test',
                    firstname: 'test',
                    cap: 'test',
                    division: 'test',
                    email: 'test@email.com',
                    modyfiedBy: 'test',
                    modyfiedWhen: Ext.Date.clearTime(new Date())
                });
                store.add(r);
                myLawers.lawers.push(r);
            }
        },
        {
            xtype: 'button',
            text: 'Delete',
            handler: function ()
            {
                deleteSelection('LawerGrid', 'LawerAdminApp.store.Lawer', myLawers.lawers);
            }
        }
    ],
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
            header: 'Last Name',
            dataIndex: 'lastname',
            flex: 1,
            editor: {
                allowBlank: false
            }
        },
        {
            header: 'First Name',
            dataIndex: 'firstname',
            flex: 1,
            editor: {
                allowBlank: false
            }
        },
        {
            header: 'Cap',
            dataIndex: 'cap',
            flex: 1,
            editor: {
                allowBlank: false
            }
        },
        {
            header: 'Division',
            dataIndex: 'division',
            flex: 2,
            editor: {
                allowBlank: false
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