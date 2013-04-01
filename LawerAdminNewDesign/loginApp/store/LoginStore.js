console.log("LoginApp.store.LoginStore.js begins ....");
Ext.define('LoginApp.store.LoginStore', {
    extend: 'Ext.data.Store',
    requires: [
        'LoginApp.model.LoginModel'
    ],
    model: 'LoginApp.model.LoginModel',
    storeId: 'loginstore',
    data: [
        {nick: "mainadmin", pass: "12345678"},
        {nick: "offadm", pass: "98765432"},
        {nick: "miller", pass: "01234567"}
    ]
});
console.log("LoginApp.store.LoginStore.js ends ....");
