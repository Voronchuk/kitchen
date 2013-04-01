Ext.define('LawerAdminApp.view.center.Panel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.centerpanel',
    layout: 'card',
    requires: [
        'LawerAdminApp.view.center.client.TabPanel',
        'LawerAdminApp.view.center.deal.TabPanel',
        'LawerAdminApp.view.center.lawer.TabPanel',
        'LawerAdminApp.view.center.service.TabPanel',
        'LawerAdminApp.view.center.communication.TabPanel',
        'LawerAdminApp.view.center.log.View'
    ],
    id: 'center',
    deferredRender: false,
    items: [
        {xtype: 'lawerpanel', id: 'LawerPanel'},
        {xtype: 'clientpanel', id: 'ClientPanel'},
        {xtype: 'servicepanel', id: 'ServicePanel'},
        {xtype: 'dealpanel', id: 'DealPanel'},
        {xtype: 'communpanel', id: 'CommunPanel'},
        {xtype: 'logview', id: 'LogView'},
    ]
});
