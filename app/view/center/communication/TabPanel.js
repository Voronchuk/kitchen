Ext.define('LawerAdminApp.view.center.communication.TabPanel', {

    extend: 'Ext.tab.Panel',
    alias: 'widget.communpanel',

    items: [
        {
            xtype: 'panel',
            title: 'Mail',

            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            bodyPadding: 5,
            border: false,
            shadow: false,
            defaultType: 'textfield',

            items: [
                {
                    fieldLabel: 'Send to',
                    name: 'send',
                    xtype: 'combo',
                    displayField: 'email',
                    queryMode: 'local',
                    store: 'LawerAdminApp.store.Lawer'
                },
                {
                    fieldLabel: 'Subject',
                    name: 'Subject'
                },
                {
                    xtype: 'htmleditor',
                    name: 'reminder_text',
                    flex: 1
                }
            ],

            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    layout: {pack: 'center'},
                    items: [
                        {
                            minWidth: 80,
                            text: 'Send'
                        }
                    ]
                }
            ]
        },

        {
            xtype: 'panel',
            title: 'Chat',

            bodyPadding: 5,

            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            items: [
                {
                    fieldLabel: 'Contacts',
                    name: 'contacts',
                    xtype: 'combo',
                    displayField: 'nick',
                    maxWidth: '300',
                    queryMode: 'local',
                    store: 'LawerAdminApp.store.Lawer'
                },
                {
                    xtype: 'textfield',
                    flex: 5,
                    readOnly: true
                },
                {
                    xtype: 'textfield',
                    flex: 1
                }
            ],

            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    layout: {pack: 'center'},
                    items: [
                        {
                            minWidth: 80,
                            text: 'Send'
                        }
                    ]
                }
            ]
        }
    ]

});
