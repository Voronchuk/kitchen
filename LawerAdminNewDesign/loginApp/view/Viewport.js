console.log("LoginApp.view.Viewport.js begins ....");
Ext.define('LoginApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: {
        type: 'border'
    },
    requires: [
        'LoginApp.view.LoginPanel'
    ],
    id: 'viewport',
    items: [
        {region: 'center', xtype: 'loginpanel'     }
    ]
});
console.log("LoginApp.view.Viewport.js ends ....");
