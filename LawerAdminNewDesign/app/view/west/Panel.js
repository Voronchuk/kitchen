Ext.define('LawerAdminApp.view.west.Panel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.startpanel',
    requires: [
        'LawerAdminApp.view.west.region.Panel',
        'LawerAdminApp.view.west.menu.Panel'
    ],
    title: 'Menu and Navigation',
    id: 'start-panel',
    split: true,
    width: 200,
    minWidth: 175,
    maxWidth: 400,
    collapsible: true,
    animCollapse: true,
    margins: '0 0 0 5',
    layout: {type: 'vbox', align: 'stretch'},
    collapsed: false,
    items: [
        {xtype: 'menupanel', id: 'TreeMenu', flex: 1},
        {xtype: 'regionpanel', flex: 1}
    ]
});
