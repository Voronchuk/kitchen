Ext.define('LawerAdminApp.view.west.region.Panel', {

    extend: 'Ext.tree.Panel',
    alias: 'widget.regionpanel',
    title: 'Regions and Departments',

    store: 'LawerAdminApp.store.regionDepartmentsTree',

    rootVisible: false,
    useArrows: true

})

