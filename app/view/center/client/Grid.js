Ext.define('LawerAdminApp.view.center.client.Grid', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.clientgrid',
    title: 'Clients',

    mixins : ['LawerAdminApp.controller.AddDeletable'],

    store: 'LawerAdminApp.store.Client',

    plugins: [Ext.create('Ext.grid.plugin.CellEditing', {clicksToEdit: 1})],

    tbar: [
        {
            xtype: 'button',
            text: 'Add',
            handler: function ()
            {
                this.up().up().addNew('LawerAdminApp.store.Client','LawerAdminApp.model.Client',myClients.clients)
            }
        },
        {
            xtype: 'button',
            text: 'Delete',
            handler: function ()
            {
                this.up().up().deleteSelection('ClientGrid', 'LawerAdminApp.store.Client', myClients.clients);
            }
        }
    ],

    columns: [
        {
            header: 'ID',
            dataIndex: 'id'
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
        }
    ]

});
