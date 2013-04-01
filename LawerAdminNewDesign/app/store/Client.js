var myClients = {
    "total": "26",
    "clients": [
        { id: "0",  lastname: "qwertyA", firstname: "awerty", phone: "1234561", email: "awerty@gmail.com"        },
        { id: "1",  lastname: "qwertyB", firstname: "bwerty", phone: "2234562", email: "bwerty@gmail.com"        },
        { id: "2",  lastname: "qwertyC", firstname: "cwerty", phone: "3234563", email: "cwerty@gmail.com"        },
        { id: "3",  lastname: "qwertyD", firstname: "dwerty", phone: "4234564", email: "dwerty@gmail.com"        },
        { id: "4",  lastname: "qwertyE", firstname: "ewerty", phone: "5234565", email: "ewerty@gmail.com"        },
        { id: "5",  lastname: "qwertyF", firstname: "fwerty", phone: "6234566", email: "fwerty@gmail.com"        },
        { id: "6",  lastname: "qwertyG", firstname: "jwerty", phone: "7234567", email: "jwerty@gmail.com"        },
        { id: "7",  lastname: "qwertyH", firstname: "hwerty", phone: "8234568", email: "hwerty@gmail.com"        },
        { id: "8",  lastname: "qwertyI", firstname: "iwerty", phone: "9234569", email: "iwerty@gmail.com"        },
        { id: "9",  lastname: "qwertyJ", firstname: "jwerty", phone: "1234561", email: "jwerty@gmail.com"        },
        { id: "10", },
        { id: "11", },
        { id: "12", },
        { id: "13", },
        { id: "14", },
        { id: "15", },
        { id: "16", },
        { id: "17", },
        { id: "18", },
        { id: "19", },
        { id: "20", },
        { id: "21", },
        { id: "22", },
        { id: "23", },
        { id: "24", },
        { id: "25", }
    ]
}
Ext.define('LawerAdminApp.store.Client', {
    extend: 'Ext.data.Store',
    requires: [
        'LawerAdminApp.model.Client',
    ],
    storeId: 'Client',
    model: 'LawerAdminApp.model.Client',
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'clients',
            totalProperty: 'total'
        }
    },
    data: myClients,
});
