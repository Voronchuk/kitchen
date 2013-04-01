Ext.define('LawerAdminApp.view.center.log.View', {
    extend: 'Ext.view.View',
    alias: 'widget.logview',
    autoScroll: true,
    itemId: 'LogView',
    autoShow: true,
    height: '100%',
    emptyText: 'No log messages available',
    store: 'LawerAdminApp.store.logAdminsOps',
    stateful: true,
    tpl: new Ext.XTemplate('<tpl for=".">',
        '<div style="margin-bottom: 5px;" class="thumb-wrap">',
        '<span>   {time} </span>', '<span>   </span>',
        '<span>   {cap} </span>',
        '<span><b>{nick} </b></span>',
        '<span>   {op}   </span>', '<span>   </span>',
        '<span><b>{state}</b></span>',
        '</div>',
        '</tpl>'
    ),
    itemSelector: 'div.thumb-wrap',
    initComponent: function ()
    {
        var store = this.getStore();
        this.callParent(arguments);
    }
});
