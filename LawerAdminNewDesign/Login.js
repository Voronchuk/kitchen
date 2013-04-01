Ext.Loader.setConfig({enabled: true});
Ext.application(
    {
        name: 'LoginApp',
        appFolder: './loginApp',
        controllers: [
            'LoginMain',
        ],
        autoCreateViewport: true,
    });
