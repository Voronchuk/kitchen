Ext.define('LawerAdminApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: {
        type: 'border'
    },
    requires: [
        'LawerAdminApp.view.west.Panel',
        'LawerAdminApp.view.center.Panel'
    ],
    id: 'viewport',
    items: [
        {region: 'west', xtype: 'startpanel'     },
        {region: 'center', xtype: 'centerpanel'  }
    ]
});
