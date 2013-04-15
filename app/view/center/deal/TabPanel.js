Ext.define('LawerAdminApp.view.center.deal.TabPanel', {

    extend: 'Ext.tab.Panel',
    alias: 'widget.dealpanel',

    requires: [
        'LawerAdminApp.view.center.deal.Grid',
        'LawerAdminApp.view.center.deal.Details'
    ],

    items: [
        {xtype: 'dealgrid', id: 'DealGrid'},
        {xtype: 'dealdetails', id: 'DealDetails'}
    ],

    deferredRender: false

});
