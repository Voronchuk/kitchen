Ext.define('LawerAdminApp.view.center.lawer.Grid', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.lawergrid',
    title: 'Lawyers',

    mixins : ['LawerAdminApp.controller.AddDeletable'],

    store: 'LawerAdminApp.store.Lawer',

    plugins: [rowEditingLawer = Ext.create('Ext.grid.plugin.RowEditing', {clicksToEdit: 1})],

    tbar: [
        {
            text: 'Add',
            handler: function ()
            {
                this.up().up().addNew('LawerGrid', 'LawerAdminApp.store.Lawer','LawerAdminApp.model.Lawer', myLawers.lawers, rowEditingLawer)
            }
        },
        {
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