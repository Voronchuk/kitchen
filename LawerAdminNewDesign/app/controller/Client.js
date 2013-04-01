Ext.define('LawerAdminApp.controller.Client', {
    extend: 'Ext.app.Controller',
    models: ['LawerAdminApp.model.Client'],
    stores: ['LawerAdminApp.store.Lawer',
        'LawerAdminApp.store.Client',
        'LawerAdminApp.store.Deal',
        'LawerAdminApp.store.Service',
        'LawerAdminApp.store.LawerService',
    ],
    init: function ()
    {
        this.control({
            '.clientgrid': {
                selectionchange: this.onClientSelectionChanged,
            }
        });
    },
    onClientSelectionChanged: function (view, selections, options)
    {
        onClientSelection();
    }
});
