var myClients = {
    "total": "999",
    "clients": [
        { id: "0",  firstname: "Joeh",          lastname: "Smith",     phone: "1234561", email: "Joeh@gmail.com"        },
        { id: "1",  firstname: "Margaret",      lastname: "Johnson",   phone: "2234562", email: "Margaret@gmail.com"        },
        { id: "2",  firstname: "John",          lastname: "Williams",  phone: "3234563", email: "John@gmail.com"        },
        { id: "3",  firstname: "Esther",        lastname: "Jones",     phone: "4234564", email: "Esther@gmail.com"        },
        { id: "4",  firstname: "Eve",           lastname: "Brown",     phone: "5234565", email: "Eve@gmail.com"        },
        { id: "5",  firstname: "Hannah",        lastname: "Davis",     phone: "6234566", email: "Hannah@gmail.com"        },
        { id: "6",  firstname: "Margaret",      lastname: "Miller",    phone: "7234567", email: "Margaret@gmail.com"        },
        { id: "7",  firstname: "Joseph",        lastname: "Wilson",    phone: "8234568", email: "Joseph@gmail.com"        },
        { id: "8",  firstname: "Martha",        lastname: "Moore",     phone: "9234569", email: "Martha@gmail.com"        },
        { id: "9",  firstname: "Eve",           lastname: "Taylor",    phone: "1234561", email: "Eve1@gmail.com"        },
        { id: "10", firstname: "Joel"   ,       lastname: "Anderson",  phone: "1234561", email: "Joel@gmail.com"     },
        { id: "11", firstname: "Mary"    ,      lastname: "Thomas",    phone: "2234562", email: "Mary@gmail.com" },
        { id: "12", firstname: "Margaret" ,     lastname: "Jackson",   phone: "3234563", email: "Margaret1@gmail.com"     },
        { id: "13", firstname: "Annie"    ,     lastname: "White",     phone: "4234564", email: "Annie@gmail.com"   },
        { id: "14", firstname: "Margaret" ,     lastname: "Harris",    phone: "5234565", email: "Margaret2@gmail.com"      },
        { id: "15", firstname: "Edward"   ,     lastname: "Martin",    phone: "6234566", email: "Edward@gmail.com"   },
        { id: "16", firstname: "Elizabeth" ,    lastname: "Thompson",  phone: "7234567", email: "Elizabeth@gmail.com" },
        { id: "17", firstname: "Isabella"  ,    lastname: "Levis",     phone: "8234568", email: "Isabella@gmail.com"   },
        { id: "18", firstname: "Thomas"    ,    lastname: "Allen",     phone: "9234569", email: "Thomas@gmail.com"   },
        { id: "19", firstname: "Francis"   ,    lastname: "Young",     phone: "1234561", email: "Francis@gmail.com"      },
        { id: "20", firstname: "Lilly"     ,    lastname: "King",      phone: "5234565", email: "Lilly@gmail.com"      },
        { id: "21", firstname: "Samuel"    ,    lastname: "Nelson",    phone: "6234566", email: "Samuel@gmail.com"   },
        { id: "22", firstname: "Peter"     ,    lastname: "Green",     phone: "7234567", email: "Peter@gmail.com" },
        { id: "23", firstname: "Leslie"    ,    lastname: "Scott",     phone: "8234568", email: "LeslieLeslie@gmail.com"   },
        { id: "24", firstname: "Anthony"   ,    lastname: "Baker",     phone: "9234569", email: "Anthony@gmail.com"   },
        { id: "25", firstname: "Nigel"     ,    lastname: "Adams",     phone: "1234561", email: "Nigel@gmail.com"      },
    ]
}

Ext.define('LawerAdminApp.store.Client', {

    extend: 'Ext.data.Store',
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

    data: myClients
});
