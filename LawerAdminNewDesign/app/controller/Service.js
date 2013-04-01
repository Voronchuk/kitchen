Ext.define('LawerAdminApp.controller.Service', {
    extend: 'Ext.app.Controller',
    models: ['LawerAdminApp.model.Service'],
    stores: ['LawerAdminApp.store.Lawer', 'LawerAdminApp.store.Deal', 'LawerAdminApp.store.Client', 'LawerAdminApp.store.Service'],
    init: function ()
    {
        this.control({
            '.servicegrid': {
                selectionchange: this.onServiceSelectionChanged
            }
        });
    }
});
