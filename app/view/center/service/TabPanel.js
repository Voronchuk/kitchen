Ext.define('LawerAdminApp.view.center.service.TabPanel', {

    extend: 'Ext.tab.Panel',
    alias: 'widget.servicepanel',

    requires: [
        'LawerAdminApp.view.center.service.TreePanel',
        'LawerAdminApp.view.center.service.Details'
    ],

    items: [
        {xtype: 'servicetreepanel', id: 'ServicesTree'},
        {xtype: 'servicedetails', id: 'ServiceDetails'}
    ],

    deferredRender: false

});
