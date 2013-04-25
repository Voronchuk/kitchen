Ext.define('LawerAdminApp.view.center.service.Details', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.servicedetails',
    title: 'Details',

    layout: 'accordion',

    items: [
        {
            xtype: 'grid',
            title: 'Lawyers Queries for Services',

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
            title: 'Service Lawyer',

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
            title: 'Service Client',

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
            ]
        },
        {
            xtype: 'grid',
            title: 'Service Practice',

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
            ]
        }
    ],

    initComponent: function (config)
    {
        this.items[0].store = Ext.create('LawerAdminApp.store.Lawer', {storeId: 'ServiceDetailsLawer'});
        this.items[1].store = Ext.create('LawerAdminApp.store.Lawer', {storeId: 'ServiceDetailsAllLawer'});
        this.items[2].store = Ext.create('LawerAdminApp.store.Client', {storeId: 'ServiceDetailsClient'});
        this.items[3].store = Ext.create('LawerAdminApp.store.Deal', {storeId: 'ServiceDetailsDeal'});
        Ext.apply(this, config);
        this.callParent(arguments);
    }

});
