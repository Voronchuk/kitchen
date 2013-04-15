Ext.define('LoginApp.store.LoginStore', {

    extend: 'Ext.data.Store',
    storeId: 'loginstore',

    model: 'LoginApp.model.LoginModel',

    data: [
        {nick: "mainadmin", pass: "12345678"},
        {nick: "offadm", pass: "98765432"},
        {nick: "miller", pass: "01234567"}
    ]

});