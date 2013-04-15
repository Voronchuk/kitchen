Ext.define('LawerAdminApp.view.center.client.TabPanel', {

    extend: 'Ext.tab.Panel',
    alias: 'widget.clientpanel',

    requires: [
        'LawerAdminApp.view.center.client.Grid',
        'LawerAdminApp.view.center.client.Details'
    ],

    items: [
        {xtype: 'clientgrid', id: 'ClientGrid'},
        {xtype: 'clientdetails', id: 'ClientDetails'},
    ],

    deferredRender: false

});
