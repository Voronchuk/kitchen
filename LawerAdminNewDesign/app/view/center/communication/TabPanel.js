Ext.define('LawerAdminApp.view.center.communication.TabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.communpanel',
    requires: ['LawerAdminApp.store.Lawer', ],
    items: [
        {
            xtype: 'panel',
            title: 'Mail',
            layout: 'absolute',
            padding: '5 5 0 5',
            border: false,
            defaultType: 'textfield',
            tbar: [
                {
                    text: 'Send',
                },
                {
                    text: 'Save',
                },
                {
                    text: 'Check Spelling',
                },
                {
                    text: 'Print',
                },
                {
                    text: 'Attach a File',
                }
            ],
            items: [
                {
                    x: 0,
                    y: 5,
                    xtype: 'label',
                    text: 'From:'
                },
                {
                    x: 55,
                    y: 0,
                    name: 'from',
                    hideLabel: true,
                    anchor: '100%'
                    // anchor width by %
                },
                {
                    x: 0,
                    y: 32,
                    xtype: 'label',
                    text: 'To:'
                }
                ,
                {
                    x: 55,
                    y: 27,
                    name: 'to',
                    hideLabel: true,
                    anchor: '100%',  // anchor width by %
                    xtype: 'combo',
                    displayField: 'email',
                    fieldLabel: 'Send To',
                    queryMode: 'local',
                    selectOnTab: false,
                    store: 'LawerAdminApp.store.Lawer',
                },
                {
                    x: 0,
                    y: 59,
                    xtype: 'label',
                    text: 'Subject:'
                },
                {
                    x: 55,
                    y: 54,
                    name: 'subject',
                    hideLabel: true,
                    anchor: '100%'  // anchor width by %
                },
                {
                    x: 0,
                    y: 81,
                    hideLabel: true,
                    xtype: 'textarea',
                    name: 'msg',
                    anchor: '100% 100%'  // anchor width and height
                }
            ]},
        {
            xtype: 'panel',
            title: 'Chat',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            tbar: [
                {
                    xtype: 'buttongroup',
                    columns: 2,
                    items: [
                        { xtype: 'splitbutton', text: ' (Away)', id: 'splitbutton',
                            menu: [
                                { text: 'Available', iconCls: 'ico-sts-available' },
                                { text: 'Busy', iconCls: 'ico-sts-busy' },
                                { text: 'Away', iconCls: 'ico-sts-away' },
                                { text: 'Appear Offline', iconCls: 'ico-sts-offline'}
                            ]
                        },
                        { xtype: 'splitbutton', text: 'Share a quick message',
                            menu: [
                                { text: 'quick message to lawers and admins'}
                            ]
                        }
                    ]
                }
            ],
            items: [

                //        {
                //            xtype:'treepanel',
                //            id:'lawerStatusTreePanel',
                //            store: Ext.create('LawerAdminApp.store.regionDepartmentsTree'), //;'regionDepartmentsTree',
                // //           viewConfig:{
                ////                plugins:{
                ////                    ptype:'treeviewdragdrop',
                ////                    containerScroll:true
                ////                }
                //            },
                //            useArrows:true,
                //            width:200,
                //            height:'100%',
                //            cls:'settings-tree',
                //            rootVisible:true,
                //            autoscroll:true,
                //            listeners:{
                //                itemdblclick:function (treepanel, record, item, index, e, eOpts)
                //                {
                //                    var records = this.getView().getChecked(),
                //                        names = [];
                //                    Ext.Array.each(records, function (rec)
                //                    {
                //                        names.push(rec.get('text'))
                //                    });
                //                    console.log("itemdblclick: " + names.join(',  '));
                //                }
                //            }
                //        }
                //        {
                //            xtype:'combo',
                //            displayField:'email',
                //            fieldLabel:'Send To',
                //            queryMode:'local',
                //            selectOnTab:false,
                //            name:'to'
                //        },
                //        {
                //            xtype:'textfield',
                //            fieldLabel:' Subject',
                //            name:'subject'
                //        },
                //        {
                //            xtype:'textarea',
                //            fieldLabel:'Message text',
                //            hideLabel:true,
                //            name:'msg',
                //            style:'margin:0',
                //            flex:1
                //        }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    layout: {
                        pack: 'center'
                    },
                    items: [
                        {
                            minWidth: 80,
                            text: 'Send'
                        },
                        {
                            minWidth: 80,
                            text: 'Cancel'
                        }
                    ]
                }
            ]
        }
    ],
});
