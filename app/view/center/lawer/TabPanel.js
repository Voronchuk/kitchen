Ext.define('LawerAdminApp.view.center.lawer.TabPanel', {

    extend: 'Ext.tab.Panel',
    alias: 'widget.lawerpanel',

    requires: [
        'LawerAdminApp.view.center.lawer.Grid',
        'LawerAdminApp.view.center.lawer.Details'
    ],

    items: [
        {xtype: 'lawergrid', id: 'LawerGrid'},
        {xtype: 'lawerdetails', id: 'LawerDetails'}
    ],

    deferredRender: false

});
