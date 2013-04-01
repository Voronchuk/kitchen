Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.state.*',
    'Ext.form.*'
]);
var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
    clicksToMoveEditor: 1,
    autoCancel: false
});
Ext.define('LawerAdminApp.view.center.deal.Details', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.dealdetails',
    layout: 'accordion',
    title: 'Details',
    requires: [
        'LawerAdminApp.store.DealDetails.Lawer',
        'LawerAdminApp.store.DealDetails.Client',
        'LawerAdminApp.store.DealDetails.Service'
    ],
    items: [
        {
            xtype: 'grid',
            title: 'Lawers',
            store: 'LawerAdminApp.store.DealDetails.Lawer',
            columns: [
                {
                    header: 'Last Name',
                    dataIndex: 'lastname',
                    flex: 1
                },
                {
                    header: 'First Name',
                    dataIndex: 'firstname',
                    flex: 1
                },
                {
                    header: 'Cap',
                    dataIndex: 'cap',
                    flex: 1
                },
                {
                    header: 'Division',
                    dataIndex: 'division',
                    flex: 2
                }
            ]},
        {
            xtype: 'grid',
            store: 'LawerAdminApp.store.DealDetails.Client',
            title: 'Clients',
            columns: [
                {
                    header: 'Lastname',
                    dataIndex: 'lastname',
                    flex: 1
                },
                {
                    header: 'Firstname',
                    dataIndex: 'firstname',
                    flex: 1
                },
                {
                    header: 'Contact Phone',
                    dataIndex: 'phone',
                    flex: 1
                },
                {
                    header: 'E-mail',
                    dataIndex: 'email',
                    flex: 2
                },
                {
                    header: 'Address',
                    dataIndex: 'address',
                    flex: 2
                }
            ]

        },
        {
            xtype: 'grid',
            store: 'LawerAdminApp.store.DealDetails.Service',
            title: 'Services',
            columns: [
                {
                    header: 'Name', dataIndex: 'name', flex: 1,
                },
                {
                    header: 'Description', dataIndex: 'description', flex: 2,
                },
                {
                    header: 'Price', dataIndex: 'price', width: 80,
                },
                {
                    header: 'Sharing, %', dataIndex: 'sharing', width: 80,
                }
            ]
        }
    ]
});
