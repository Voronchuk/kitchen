Ext.define('LoginApp.view.Viewport', {

    extend: 'Ext.container.Viewport',
    id: 'viewport',

    layout: {type: 'border'},

    requires: [
        'LoginApp.view.LoginPanel'
    ],

    items: [
        {region: 'center', xtype: 'loginpanel'     }
    ]

});

