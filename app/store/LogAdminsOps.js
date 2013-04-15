Ext.define('LawerAdminApp.store.logAdminsOps', {

    extend: 'Ext.data.Store',
    storeId: 'logAdminsOps',

    model: 'LawerAdminApp.model.AdminOp',

    data: [
        {nick: "mainadmin", op: "Logging", state: "beginned"                    },
        {nick: "mainadmin", op: "Logging", state: "failed"                      },
        {nick: "mainadmin", op: "Logging", state: "beginned"                    },
        {nick: "mainadmin", op: "Logging", state: "successfully ended"          },
        {nick: "mainadmin", op: "Changing Password", state: "beginned"          },
        {nick: "mainadmin", op: "Changing Password", state: "successfully ended"},
        {nick: "offadmin",  op: "Registering", state: "beginned"                },
        {nick: "offadmin",  op: "Registering", state: "successfully ended"      },
        {nick: "offadmin",  op: "Logging", state: "beginned"                    },
        {nick: "offadmin",  op: "Logging", state: "failed - Time Limit Exceeded"},
        {nick: "offadmin",  op: "Logging", state: "beginned"                    },
        {nick: "offadmin",  op: "Logging", state: "successfully ended"          },
        {nick: "miller",    op: "Registering", state: "beginned"                },
        {nick: "miller",    op: "Registering", state: "successfully ended"      },
        {nick: "offadmin",  op: "Clients", state: "changed"                     },
        {nick: "offadmin",  op: "Leaving", state: "ok"                          },
        {nick: "miller",    op: "Logging", state: "beginned"                    },
        {nick: "miller",    op: "Logging", state: "successfully ended"          },
    ]

});