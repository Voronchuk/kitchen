Ext.define('LawerAdminApp.view.center.log.View', {

    extend: 'Ext.view.View',
    alias: 'widget.logview',

    store: 'LawerAdminApp.store.logAdminsOps',

    autoShow: true,
    autoScroll: true,
    margins: '5 5 5 5',
    height: '100%',
    stateful: true,
    emptyText: 'No log messages available',

    tpl: new Ext.XTemplate('<tpl for=".">',
        '<div style="margin-bottom: 5px;" class="thumb-wrap">',
        '<span>   {time} </span>', '<span>   </span>',
        '<span>   {cap} </span>',
        '<span><b>{nick} </b></span>',
        '<span>   {op}   </span>', '<span>   </span>',
        '<span><b>{state}</b></span>',
        '</div>',
        '</tpl>'
    )

});
