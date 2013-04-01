Ext.define('LawerAdminApp.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: [
        'LawerAdminApp.store.Divisions',
        'LawerAdminApp.store.Cap',
        'LawerAdminApp.store.logAdminsOps',
        'LawerAdminApp.store.Lawer',
        'LawerAdminApp.store.Client',
        'LawerAdminApp.store.Service',
        'LawerAdminApp.store.Deal',
        'LawerAdminApp.store.LawerService',
        'LawerAdminApp.store.LawerDetails.Client',
        'LawerAdminApp.store.LawerDetails.Deal',
        'LawerAdminApp.store.LawerDetails.Service',
        'LawerAdminApp.store.DealDetails.Client',
        'LawerAdminApp.store.DealDetails.Lawer',
        'LawerAdminApp.store.DealDetails.Service',
        'LawerAdminApp.store.ClientDetails.Lawer',
        'LawerAdminApp.store.ClientDetails.Deal',
        'LawerAdminApp.store.ClientDetails.Service',
        'LawerAdminApp.store.regionDepartmentsTree',
    ],
    init: function ()
    {
        this.control({
            '#TreeMenu': {
                afterrender: function (tree)
                {
                    tree.getSelectionModel().select(0);
                },
                selectionchange: this.onTreeMenuSelection
            },
            '#LawerGrid': {
                viewready: fnInitialSelectGrid('LawerGrid')
            },
            '#DealGrid': {
                viewready: fnInitialSelectGrid('DealGrid')
            },
            '#ClientGrid': {
                viewready: fnInitialSelectGrid('ClientGrid')
            },
            '#ServiceGrid': {
                viewready: fnInitialSelectGrid('ServiceGrid')
            }
        });
    },
    onTreeMenuSelection: function (model, selected)
    {
        var selectedData = selected[0].data;
        if (selectedData.depth == 1)
        {
            clearFiltersForAllBaseStores();
        }
        setActiveComponentsFromTwoLevelMenu(selectedData);
    }
});

