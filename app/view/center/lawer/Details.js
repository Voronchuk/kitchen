Ext.define('LawerAdminApp.view.center.lawer.Details', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.lawerdetails',
    title: 'Details',

    layout: 'accordion',

    items: [
        {
            xtype: 'grid',
            title: 'Clients of Lawer',

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
            title: 'Lawer Practice',

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
            ]
        },
        {
            xtype: 'treepanel',
            title: 'Clients Queries for Services',

            rootVisible: false,
            lines:false,

            columns: [
                {
                    text: 'Id',
                    flex: 1,
                    sortable: true,
                    dataIndex: 'id'
                },
                {
                    xtype: 'treecolumn',
                    text: 'Service',
                    flex: 4,
                    sortable: true,
                    dataIndex: 'name'
                },
                {
                    // xtype: 'templatecolumn',
                    text: 'Sharing',
                    flex: 1,
                    sortable: true,
                    // dataIndex: 'sharing',
                    align: 'center',
                    // tpl: this.SimpleColumnTemplateForTree('{sharing:this.format}'),
                }
                ,
                {
                    //xtype: 'templatecolumn',
                    text: 'Price',
                    flex: 1,
                    sortable: true,
                    // dataIndex: 'price',
                    align: 'center',
                    //   tpl:  this.SimpleColumnTemplateForTree('{price:this.format}'),
                },
            ]
        },
        {
            xtype: 'treepanel',
            title: 'this Lawer Services Tree',

            rootVisible: false,
            lines:false,

            columns: [
                {
                    text: 'Id',
                    flex: 1,
                    sortable: true,
                    dataIndex: 'id'
                },
                {
                    xtype: 'treecolumn',
                    text: 'Service',
                    flex: 4,
                    sortable: true,
                    dataIndex: 'name'
                },
                {
                    // xtype: 'templatecolumn',
                    text: 'Sharing',
                    flex: 1,
                    sortable: true,
                    dataIndex: 'sharing',
                    align: 'center'
                    // tpl: this.SimpleColumnTemplateForTree('{sharing:this.format}'),
                }
                ,
                {
                    //xtype: 'templatecolumn',
                    text: 'Price',
                    flex: 1,
                    sortable: true,
                    dataIndex: 'price',
                    align: 'center',
                    //   tpl:  this.SimpleColumnTemplateForTree('{price:this.format}'),
                }
            ]
        }
    ],

    initComponent: function (config)
    {
        this.items[0].store = Ext.create('LawerAdminApp.store.Client', {storeId: 'LawerDetailsClient'});
        this.items[1].store = Ext.create('LawerAdminApp.store.Deal', {storeId: 'LawerDetailsDeal'});
        this.items[2].store = Ext.create('LawerAdminApp.store.ServicesTree', {storeId: 'LawerServicesDetails', root: myLawerServicesTree});
        this.items[3].store = Ext.create('LawerAdminApp.store.ServicesTree', {storeId: 'LawerAllServicesDetails', root: myLawerAllServicesTree});
        Ext.apply(this, config);
        this.callParent(arguments);
    }

});
