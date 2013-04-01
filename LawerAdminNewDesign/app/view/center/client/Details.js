Ext.define('LawerAdminApp.view.center.client.Details', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.clientdetails',
    layout: 'accordion',
    title: 'Details',
    requires: [
        'LawerAdminApp.store.ClientDetails.Lawer',
        'LawerAdminApp.store.ClientDetails.Deal',
        'LawerAdminApp.store.ClientDetails.Service',
    ],
    items: [
        {
            xtype: 'grid',
            title: 'Lawers',
            store: 'LawerAdminApp.store.ClientDetails.Lawer',
            columns: [
                {
                    header: 'ID',
                    dataIndex: 'id',
                    width: 40,
                },
                {
                    header: 'Last Name',
                    dataIndex: 'lastname',
                    flex: 1,
                },
                {
                    header: 'First Name',
                    dataIndex: 'firstname',
                    flex: 1,
                },
                {
                    header: 'Cap',
                    dataIndex: 'cap',
                    flex: 1,
                },
                {
                    header: 'Division',
                    dataIndex: 'division',
                    flex: 2
                }
            ]},
        {
            xtype: 'grid',
            store: 'LawerAdminApp.store.ClientDetails.Deal',
            title: 'Practice',
            columns: [
                {
                    header: 'ID',
                    dataIndex: 'id',
                    width: 40
                },
                {
                    header: 'Description',
                    dataIndex: 'description',
                    flex: 2
                },
                {
                    header: 'Lawer ID',
                    dataIndex: 'lawer_id'
                },
                {
                    header: 'Service ID',
                    dataIndex: 'service_id'
                },
                {
                    header: 'Start',
                    dataIndex: 'start',
                    flex: 1,
                    xtype: 'datecolumn',
                    format: 'm/d/Y',
                },
                {
                    header: 'End',
                    dataIndex: 'end',
                    flex: 1,
                    xtype: 'datecolumn',
                    format: 'm/d/Y',
                },
                {
                    header: 'Status',
                    dataIndex: 'status',
                    flex: 1,
                },
                {
                    header: 'Cost',
                    dataIndex: 'cost',
                    width: 80,
                }
            ]},
        {
            xtype: 'grid',
            store: 'LawerAdminApp.store.ClientDetails.Service',
            title: 'Services',
            columns: [
                {
                    header: 'ID', dataIndex: 'id', width: 40,
                },
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
