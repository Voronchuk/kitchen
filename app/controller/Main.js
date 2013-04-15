Ext.define('LawerAdminApp.controller.Main', {

    extend: 'Ext.app.Controller',

    mixins: ['LawerAdminApp.controller.FilterFunctionsForLinkedStores'],

    stores: [
        'LawerAdminApp.store.logAdminsOps',
        'LawerAdminApp.store.Lawer',
        'LawerAdminApp.store.Client',
        'LawerAdminApp.store.Deal',
        'LawerAdminApp.store.regionDepartmentsTree',
        'LawerAdminApp.store.ServicesTree',
        'LawerAdminApp.store.LawerService'
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
                viewready: this.fnInitialSelectGrid('LawerGrid')
            },
            '#DealGrid': {
                viewready: this.fnInitialSelectGrid('DealGrid')
            },
            '#ClientGrid': {
                viewready: this.fnInitialSelectGrid('ClientGrid')
            },
            '#ServicesTree': {
                viewready: this.fnInitialSelectTree('ServicesTree')
            }
        });
    },

    fnInitialSelectGrid: function (ComponentName)
    {
        return function ()
        {
            var component = Ext.getCmp(ComponentName);
            var sm;
            if (component)
            {
                sm = component.getSelectionModel();
            }
            if (sm)
            {
                sm.select(0);
            }
        }
    },


    fnInitialSelectTree: function (ComponentName)
    {
        return function ()
        {
            var component = Ext.getCmp(ComponentName);
            var record = component.getStore().getNodeById('0');
            var sm = component.getSelectionModel();
            sm.select(record);
        }
    },


    onTreeMenuSelection: function (model, selected)
    {
        var selectedData = selected[0].data;
        if (selectedData.depth == 1)
        {
            this.clearFiltersForAllBaseStores();
        }
        this.setActiveComponentsFromTwoLevelMenu(selectedData);
    },

    setActiveComponentsFromTwoLevelMenu: function (selectedData)
    {
        var centerPanelLayout = Ext.getCmp('center').getLayout();

        function level0(index)
        {
            centerPanelLayout.setActiveItem(index);
        };
        function level1(index)
        {
            centerPanelLayout.getActiveItem().setActiveTab(index);
        };
        var setActiveComponentOnLevel = [ level0, level1];
        var ids = (selectedData.id).split('.');
        for (i = 0; i < ids.length; i++)
        {
            setActiveComponentOnLevel[i](parseInt(ids[i]));
        }
    }

});

