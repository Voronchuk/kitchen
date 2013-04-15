Ext.Loader.setConfig({enabled: true});

Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.state.*',
    'Ext.form.*',
    'Ext.grid.plugin.BufferedRenderer'
]);

Ext.application({

    name: 'LawerAdminApp',
    appFolder: './app',

    controllers: [
        'LawerAdminApp.controller.Main',
        'LawerAdminApp.controller.Lawer',
        'LawerAdminApp.controller.Region',
        'LawerAdminApp.controller.Client',
        'LawerAdminApp.controller.Service',
        'LawerAdminApp.controller.Deal'
    ],

    autoCreateViewport: true

});