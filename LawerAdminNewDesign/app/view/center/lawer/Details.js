Ext.define('LawerAdminApp.view.center.lawer.Details', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.lawerdetails',
    layout: 'accordion',
    title: 'Details',
    requires: [
        'LawerAdminApp.store.LawerDetails.Client',
        'LawerAdminApp.store.LawerDetails.Deal',
        'LawerAdminApp.store.LawerDetails.Service',
    ],
    items: [
        {
            xtype: 'grid',
            store: 'LawerAdminApp.store.LawerDetails.Client',
            title: 'Clients',
            columns: [
                {
                    header: 'ID',
                    dataIndex: 'id',
                    width: 40
                },
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
            ],
        },
        {
            xtype: 'grid',
            store: 'LawerAdminApp.store.LawerDetails.Deal',
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
                    flex: 2,
                },
                {
                    header: 'Client ID',
                    dataIndex: 'client_id',
                },
                {
                    header: 'Service ID',
                    dataIndex: 'service_id',
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
            store: 'LawerAdminApp.store.LawerDetails.Service',
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
