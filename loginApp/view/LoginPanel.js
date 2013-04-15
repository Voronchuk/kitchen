Ext.define('LoginApp.view.LoginPanel', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.loginpanel',
    title: 'Login',
    id: 'loginpanel',

    bodyPadding: 13,
    height: 300,
    width: 300,
    defaultType: 'textfield',
    defaults: {anchor: '100%', style: 'text-align:center'},

    items: [
        {
            allowBlank: false,
            id: 'nick',
            fieldLabel: 'User ID',
            name: 'user',
            emptyText: 'nickname'
        },
        {
            allowBlank: false,
            id: 'pass',
            fieldLabel: 'Password',
            name: 'pass',
            emptyText: 'password',
            inputType: 'password'
        },
        {
            xtype: 'container',
            style: 'text-align:center',

            items: [
                {
                    xtype: 'button',
                    cls: 'contactBtn',
                    scale: 'large',
                    text: 'Login',
                    width: 80,

                    handler: function ()
                    {
                        // emulation of server side login/password testing
                        var lognamevalue = Ext.getCmp('nick').value;
                        var logpassvalue = Ext.getCmp('pass').value;
                        var store = Ext.getStore("LoginApp.store.LoginStore");
                        var rec = store.findRecord('nick', lognamevalue, 0, false, true, true);
                        if (rec && rec.data.pass == logpassvalue)
                        {
                            window.location.href = "index.html";
                        }
                    }
                }
            ]
        }
    ]

});