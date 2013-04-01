console.log("LoginApp.model.LoginModel.js begins ....");
Ext.define('LoginApp.model.LoginModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'nick', type: 'string'},
        {name: 'pass', type: 'string'}
    ]
});
console.log("LoginApp.model.LoginModel.js ends ....");
