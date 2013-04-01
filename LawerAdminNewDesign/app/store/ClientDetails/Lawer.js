var Stamp = new Date();
var myClientDetailsLawers = {
    "total":"29",
    "lawers":[
        {id: 0,		lastname: "mainman",		firstname: "mike",		nick: "mainadmin",	pass: "12345678",	cap: "Senjor Office Lawer", division: "Germany/Berlin/dep.15",                          accessLevel: 2,		email: 'mainadmin@lawer.com',			/*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'offline',	},
        {id: 1,		lastname: "offenderson",	firstname: "donald",	nick: "offadm",		pass: "98765432",	cap: "Office Lawer",		division: "Ukraine/Kiew/dep.12",		                    accessLevel: 1,		email: 'offadm@lawer.com',			    /*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'offline',	},
        {id: 2,		lastname: "miller",			firstname: "samuel",	nick: "miller",		pass: "01234567",	cap: "Lawer",			    division: "Ukraine/Kiew/dep.12",		                    accessLevel: 0,		email: 'miller@lawer.com',			    /*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'offline',	},
        {id: 3,		lastname: "elsing",			firstname: "jhon",		nick: "elsing",		pass: "01234567",	cap: "Office Lawer",		division: "Germany/Berlin/dep.16",			                accessLevel: 1,		email: 'selsing@lawer.com', 			/*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'online',	},
        {id: 4,		lastname: "impelmann",		firstname: "andrew",	nick: "impelmann",	pass: "01234567",	cap: "Office Lawer",		division: "Germany/Berlin/dep.15",			                accessLevel: 1,		email: 'nimpelmann@lawer.com',			/*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'online',	},
        {id: 5,		lastname: "burger",			firstname: "boris",		nick: "burger",		pass: "01234567",	cap: "Lawer",			    division: "Germany/Frankfurt/dep.17",			            accessLevel: 0,		email: 'bburger@lawer.com',  			/*modyfiedBy: 0,    modifiedWhen: Stamp,*/	currentStatus: 'online',	},
        {id: 6,		lastname: "kyvalov",		firstname: "alfred",	nick: "kyvalov",	pass: "01234567",	cap: "Office Lawer",		division: "Ukraine/Odessa/dep.14",			                accessLevel: 1,		email: 'office@lawer.com',              /*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'online',	},
        {id: 7,		lastname: "atkins",			firstname: "fill",		nick: "atkins",		pass: "01234567",	cap: "Lawer",			    division: "Germany/Berlin/dep.16",                      	accessLevel: 0,		email: 'matkins@lawer.com',   			/*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'online',	},
        {id: 8,		lastname: "arzinger",		firstname: "wolf",		nick: "arzinger",	pass: "01234567",	cap: "Lawer",			    division: "Ukraine/Odessa/dep.14",			                accessLevel: 0,		email: 'mail@lawer.com',		    	/*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'online',	},
        {id: 9,		lastname: "barabashev",		firstname: "foma",		nick: "barabashev",	pass: "01234567",	cap: "Office Lawer",		division: "Ukraine/Kiew/dep.12",			                accessLevel: 1,		email: 'info@lawer.com',		    	/*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'online',	},
        {id: 10,	lastname: "miller",			firstname: "miller",	nick: "miller",		pass: "01234567",	cap: "Lawer",		        division: "Ukraine/Kiew/dep.13",	                        accessLevel: -1,	email: 'miller@lawer.com',			    /*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'offline',	},
        {id: 11,	lastname: "miller",			firstname: "miller",	nick: "miller",		pass: "01234567",	cap: "Lawer",			    division: "Ukraine/Kiew/dep.12",                         	accessLevel: -1,	email: 'miller@lawer.com',			    /*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'offline',	},
        {id: 12,	lastname: "miller",			firstname: "miller",	nick: "miller",		pass: "01234567",	cap: "Lawer",			    division: "Germany/Frankfurt/dep.17",                   	accessLevel: -1,	email: 'miller@lawer.com',			    /*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'offline',   },
        {id: 13,	lastname: "miller",			firstname: "miller",	nick: "miller",		pass: "01234567",	cap: "Lawer",			    division: "Ukraine/Odessa/dep.14",                      	accessLevel: -1,	email: 'miller@lawer.com',			    /*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'offline',   },
        {id: 14,	lastname: "miller",			firstname: "miller",	nick: "miller",		pass: "01234567",	cap: "Lawer",			    division: "Ukraine/Odessa/dep.14",                     	    accessLevel: -1,	email: 'miller@lawer.com',			    /*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'offline',   },
        {id: 15,	lastname: "miller",			firstname: "miller",	nick: "miller",		pass: "01234567",	cap: "Lawer",			    division: "Ukraine/Odessa/dep.14",	                        accessLevel: -1,	email: 'miller@lawer.com',			    /*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'offline',   },
        {id: 16,	lastname: "miller",			firstname: "miller",	nick: "miller",		pass: "01234567",	cap: "Lawer",			    division: "Ukraine/Odessa/dep.14",                     	    accessLevel: -1,	email: 'miller@lawer.com',			    /*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'offline',   },
        {id: 17,	lastname: "miller",			firstname: "miller",	nick: "miller",		pass: "01234567",	cap: "Lawer",			    division: "Germany/Berlin/dep.15",	                        accessLevel: -1,	email: 'miller@lawer.com',			    /*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'offline',   },
        {id: 18,	lastname: "miller",			firstname: "miller",	nick: "miller",		pass: "01234567",	cap: "Lawer",			    division: "Germany/Berlin/dep.16",                     	    accessLevel: -1,	email: 'miller@lawer.com',			    /*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'offline',   },
        {id: 19,	lastname: "miller",			firstname: "miller",	nick: "miller",		pass: "01234567",	cap: "Lawer",			    division: "Germany/Berlin/dep.15",	                        accessLevel: -1,	email: 'miller@lawer.com',			    /*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'offline',   },
        {id: 20,	lastname: "miller",			firstname: "miller",	nick: "miller",		pass: "01234567",	cap: "Lawer",			    division: "Germany/Berlin/dep.16",                     	    accessLevel: -1,	email: 'miller@lawer.com',			    /*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'offline',   },
        {id: 21,	lastname: "miller",			firstname: "miller",	nick: "miller",		pass: "01234567",	cap: "Lawer",			    division: "Germany/Berlin/dep.15",	                        accessLevel: -1,	email: 'miller@lawer.com',			    /*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'offline',   },
        {id: 22,	lastname: "miller",			firstname: "miller",	nick: "miller",		pass: "01234567",	cap: "Lawer",			    division: "Germany/Berlin/dep.15",	                        accessLevel: -1,	email: 'miller@lawer.com',			    /*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'offline',   },
        {id: 23,	lastname: "miller",			firstname: "miller",	nick: "miller",		pass: "01234567",	cap: "Lawer",			    division: "Germany/Berlin/dep.16",	                        accessLevel: -1,	email: 'miller@lawer.com',			    /*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'offline',   },
        {id: 24,	lastname: "Miller",			firstname: "Bart",		nick: "miller",		pass: "01234567",	cap: "Lawer",			    division: "Germany/Frankfurt/dep.17",                    	accessLevel: -1,	email: 'miller@lawer.com',			    /*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'online' ,   },
        {id: 25,	lastname: "Konnov",			firstname: "Lisa",		nick: "konnov",		pass: "01234567",	cap: "Lawer",			    division: "Ukraine/Kiev/dep.12",			                accessLevel: -1,	email: 'miller@lawer.com',			    /*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'online' ,   },
        {id: 26,	lastname: "Sazonovsky",		firstname: "Marge",		nick: "sazon",		pass: "01234567",	cap: "Lawer",			    division: "Ukraine/Kiev/dep.12",			                accessLevel: -1,	email: 'lisa@lawer.com',			    /*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'online' ,   },
        {id: 27,	lastname: "Kydalov",		firstname: "Homer",		nick: "kydalov",	pass: "01234567",	cap: "Office Lawer",		division: "Ukraine/Kiev/dep.13",			                accessLevel: -1,	email: 'kydalov@lawer.com',			    /*modyfiedBy: 0,	modifiedWhen: Stamp,*/	currentStatus: 'online' ,   },
        {id: 28,	lastname: "Simpson",		firstname: "Maggy",		nick: "simpson",	pass: "01234567",	cap: "Lawer",			    division: "Germany/Frankfurt/dep.17",                     	accessLevel: -1,	email: 'maggy@lawer.com',			    /*modyfiedBy: 0,    modifiedWhen: Stamp,*/	currentStatus: 'online' },
    ]
};
Ext.define('LawerAdminApp.store.ClientDetails.Lawer', {
    extend: 'Ext.data.Store',
    model: 'LawerAdminApp.model.Lawer',
    storeId:'ClientDetailsLawer',
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'lawers',
            totalProperty: 'total'
        }
    },
    data: myClientDetailsLawers
});
