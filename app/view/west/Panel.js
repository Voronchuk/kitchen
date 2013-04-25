Ext.define('LawerAdminApp.view.west.Panel', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.startpanel',

    layout: {type: 'vbox', align: 'stretch'},

    split: true,
    width: 200,
    minWidth: 175,
    maxWidth: 400,
    header: false,
    collapsible: true,
    animCollapse: true,
    margins: '0 0 0 5',
    collapsed: false,

    requires: [
        'LawerAdminApp.view.west.region.Panel',
        'LawerAdminApp.view.west.menu.Panel'
    ],

    items: [
        {xtype: 'menupanel', id: 'TreeMenu', flex: 1},
        {xtype: 'regionpanel', id: 'RegionPanel',flex: 1}
    ]

});
