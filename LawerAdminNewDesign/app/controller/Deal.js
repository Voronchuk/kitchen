Ext.define('LawerAdminApp.controller.Deal', {
    extend: 'Ext.app.Controller',
    models: ['LawerAdminApp.model.Deal'],
    stores: ['LawerAdminApp.store.Lawer', 'LawerAdminApp.store.Deal', 'LawerAdminApp.store.Client', 'LawerAdminApp.store.Service'],
    init: function ()
    {
        this.control({
            '.dealgrid': {
                selectionchange: this.onDealSelectionChanged,
            }
        });
    },
    onDealSelectionChanged: function (view, selections, options)
    {
        onDealSelection();
    }
});
