Ext.define('LawerAdminApp.view.center.client.TabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.clientpanel',
    requires: [
        'LawerAdminApp.view.center.client.Grid',
        'LawerAdminApp.view.center.client.Details'
    ],
    deferredRender: false,
    items: [
        {xtype: 'clientgrid', id: 'ClientGrid'},
        {xtype: 'clientdetails', id: 'ClientDetails'},
    ]
});
