var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
    clicksToMoveEditor: 1,
    autoCancel: false
});

Ext.define('LawerAdminApp.view.center.client.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.clientgrid',
    requires: [
        'LawerAdminApp.store.Deal'
    ],
    store: 'LawerAdminApp.store.Client',
    title: 'Clients',
    tbar: [
        {
            xtype: 'button',
            text: 'Add',
            handler: function ()
            {
                store = Ext.getStore('LawerAdminApp.store.Client');
                var r = Ext.create('LawerAdminApp.model.Client', {
                    id: '' + store.count(),
                    lastname: 'test',
                    firstname: 'test',
                    phone: 'test',
                    email: 'test@email.com',
                    address: 'test',
                    modyfiedBy: 'test',
                    modyfiedWhen: Ext.Date.clearTime(new Date())
                });
                store.add(r);
                myClients.clients.push(r);
            }
        },
        {
            xtype: 'button',
            text: 'Delete',
            handler: function ()
            {
                deleteSelection('ClientGrid', 'LawerAdminApp.store.Client', myClients.clients);
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
            header: 'Lastname',
            dataIndex: 'lastname',
            flex: 1,
            editor: {
                allowBlank: false
            }
        },
        {
            header: 'Firstname',
            dataIndex: 'firstname',
            flex: 1,
            editor: {
                allowBlank: false
            }
        },
        {
            header: 'Contact Phone',
            dataIndex: 'phone',
            flex: 1,
            editor: {
                allowBlank: false
            }
        },
        {
            header: 'E-mail',
            dataIndex: 'email',
            flex: 2,
            editor: {
                allowBlank: false,
                vtype: 'email'
            }
        },
        {
            header: 'Address',
            dataIndex: 'address',
            flex: 2,
            editor: {
                allowBlank: false
            }
        },
        {
            header: 'Modyfied by',
            dataIndex: 'modyfiedBy',
            flex: 2,
            editor: {
                allowBlank: false
            }
        },
        {
            header: 'Modyfied when',
            dataIndex: 'modyfiedWhen',
            flex: 3,
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
    ],
    plugins: [rowEditing],
});
