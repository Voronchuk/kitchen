Ext.define('LawerAdminApp.controller.Lawer', {
    extend: 'Ext.app.Controller',
    models: ['LawerAdminApp.model.Lawer'],
    stores: ['LawerAdminApp.store.Lawer', 'LawerAdminApp.store.Client', 'LawerAdminApp.store.Deal', 'LawerAdminApp.store.Service'],
    init: function ()
    {
        this.control({
            '.lawergrid': {
                selectionchange: this.onLawerSelectionChanged
            }
        });
    },
    onLawerSelectionChanged: function (view, selections, options)
    {
        onLawerSelection();
    }
});
