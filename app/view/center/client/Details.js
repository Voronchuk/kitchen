Ext.define('LawerAdminApp.view.center.client.Details', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.clientdetails',
    title: 'Details',

    layout: 'accordion',

    items: [
        {
            xtype: 'grid',
            title: 'Clients Lawyers',

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
            ]
        },
        {
            xtype: 'grid',
            title: 'Conducting Deals',

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
            ]
        },
        {
            xtype: 'treepanel',
            title: 'Clients Queries',

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
                }
                ,
                {
                    xtype: 'templatecolumn',
                    text: 'Price',
                    flex: 1,
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
        this.items[0].store = Ext.create('LawerAdminApp.store.Lawer', {storeId: 'ClientDetailsLawer'});
        this.items[1].store = Ext.create('LawerAdminApp.store.Deal', {storeId: 'ClientDetailsDeal'});
        this.items[2].store =  Ext.create('LawerAdminApp.store.ServicesTree', {storeId: 'ClientServicesDetails', root: myClientServicesTree });
        Ext.apply(this, config);
        this.callParent(arguments);
    }

});
