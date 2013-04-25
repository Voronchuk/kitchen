Ext.define('LawerAdminApp.view.center.deal.Details', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.dealdetails',
    title: 'Details',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'grid',
            title: 'Deals Client',

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
            ]
        },
        {
            xtype: 'grid',
            title: 'Responsible Lawyer',

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
            xtype: 'treepanel',
            title: 'Client Query for Service',

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
                    xtype: 'templatecolumn',
                    text: 'Sharing',
                    width: 100,
                    sortable: true,
                    dataIndex: 'sharing',
                    align: 'center',
                    tpl: SimpleColumnTemplateForTree('{sharing:this.format}'),
                },
                {
                    xtype: 'templatecolumn',
                    text: 'Price',
                    width: 100,
                    sortable: true,
                    dataIndex: 'price',
                    align: 'center',
                    tpl: SimpleColumnTemplateForTree('{price:this.format}'),
                }
            ]
        }
    ],

    initComponent: function (config)
    {
        this.items[0].store = Ext.create('LawerAdminApp.store.Client', {storeId: 'DealDetailsClient'});
        this.items[1].store = Ext.create('LawerAdminApp.store.Lawer', {storeId: 'DealDetailsLawer'});
        this.items[2].store =  Ext.create('LawerAdminApp.store.ServicesTree', {storeId: 'DealDetailsServices', root: myDealServicesTree });
        Ext.apply(this, config);
        this.callParent(arguments);
    }

});
