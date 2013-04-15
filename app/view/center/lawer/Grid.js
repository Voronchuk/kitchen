Ext.define('LawerAdminApp.view.center.lawer.Grid', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.lawergrid',
    title: 'Lawers',

    mixins : ['LawerAdminApp.controller.AddDeletable'],

    store: 'LawerAdminApp.store.Lawer',

    plugins: [Ext.create('Ext.grid.plugin.CellEditing', {clicksToEdit: 1})],

    tbar: [
        {
            xtype: 'button',
            text: 'Add',
            handler: function ()
            {
                this.up().up().addNew('LawerAdminApp.store.Lawer','LawerAdminApp.model.Lawer',myLawers.lawers)
            }
        },
        {
            xtype: 'button',
            text: 'Delete',
            handler: function ()
            {
                this.up().up().deleteSelection('LawerGrid', 'LawerAdminApp.store.Lawer', myLawers.lawers);
            }
        }
    ],

    columns: [
        {
            header: 'ID',
            dataIndex: 'id'
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
        }
    ]

});