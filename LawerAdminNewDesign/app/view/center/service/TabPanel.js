Ext.define('LawerAdminApp.view.center.service.TabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.servicepanel',
    requires: [
        'LawerAdminApp.view.center.service.Grid',
        'LawerAdminApp.view.center.service.Details'
    ],
    deferredRender: false,
    items: [
        {xtype: 'servicegrid', id: 'ServiceGrid'},
        {xtype: 'servicedetails', id: 'ServiceDetails'}
    ]
});
