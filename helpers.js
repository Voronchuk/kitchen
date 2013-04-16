var maxLevelPrintData = 1;

simpleObjInspect = function (oObj, key, tabLvl)
{
    key = key || "";
    tabLvl = tabLvl || 1;
    var tabs = "\n";
    for (var i = 1; i < tabLvl; i++)
    {
        tabs += "     ";
    }
    var tk = '' + typeof key;
    var keyTypeStr = '';
    if (tk != 'string' && tk != 'boolean')
    {
        keyTypeStr = " <" + tk + ">";
    }
    var s = tabs;
    if (tabLvl > 1)
    {
        keyTypeStr = "";
        s += "[" + key + keyTypeStr + "]:";
    }
    if (oObj == null)
    {
        return s + 'null';
    }
    var oTypeS = '' + typeof oObj;
    var oTypeP = "";
    if (oTypeS == "object")
    {
        oTypeS = '';
        s += "{";
        for (var k in oObj)
        {
            if (tabLvl > maxLevelPrintData)
            {
                return s + "_ _ _ ";
            }
            if (oObj.hasOwnProperty(k))
            {
                s += this.simpleObjInspect(oObj[k], k, tabLvl + 1);
            }
        }
        s += "} ";
    }
    else
    {
        if (oTypeS != "boolean" && oTypeS != "string")
        {
            oTypeP = " <" + oTypeS + ">";
        }
        s += oTypeP + oObj + "";
    }
    return s;
};

printData = function (data, maxlevel)
{
    maxLevelPrintData = maxlevel;
    return this.simpleObjInspect(data);
};


copyFilteredByIdsJSONObj = function (dupeObj, IdValues)
{
    var retObj = null;
    var retObjChild = null;
    var retArray = [];
    var ind;
    var objInd;
    var child;
    if (typeof(dupeObj) == 'string')
    {
        return '' + dupeObj;
    }
    if (typeof(dupeObj) == 'number')
    {
        return 0 + dupeObj;
    }
    if (typeof(dupeObj) == 'boolean')
    {
        return ((dupeObj) ? true : false);
    }
    if (!dupeObj)
    {
        return retObj;
    }
    if (typeof(dupeObj) == 'object')
    {
        if (dupeObj.leaf)
        {
            if (dupeObj.id === undefined)
            {
                return null;
            }
            if (IdValues.indexOf(dupeObj.id) == -1)
            {
                return null;
            }
        }
        if (dupeObj.length !== undefined)
        {
            retArray = [];
            for (ind = 0; ind < dupeObj.length; ++ind)
            {
                child = dupeObj[ind];
                retObjChild = copyFilteredByIdsJSONObj(child, IdValues);
                if (retObjChild === null)
                {
                    continue;
                }
                retArray.push(retObjChild);
            }
            if (retArray.length == 0)
            {
                retArray = null;
            }
            return retArray;
        }
        retObj = new Object();
        for (objInd in dupeObj)
        {
            if (!dupeObj.hasOwnProperty(objInd))
            {
                continue;
            }
            child = dupeObj[objInd];
            retObjChild = copyFilteredByIdsJSONObj(child, IdValues);
            if (objInd == 'children')
            {
                if (retObjChild == null)
                {
                    return null;
                }
            }
            if (retObjChild !== null && retObjChild !== undefined)
            {
                retObj[objInd] = retObjChild;
            }
        }
        return retObj;
    }
    return retObj;
}


copyJSONObj = function (dupeObj)
{
    var retObj = null;
    var ind;
    var objInd;
    var child;
    if (typeof(dupeObj) == 'string')
    {
        return '' + dupeObj;
    }
    if (typeof(dupeObj) == 'number')
    {
        return 0 + dupeObj;
    }
    if (typeof(dupeObj) == 'boolean')
    {
        return ((dupeObj) ? true : false);
    }
    if (!dupeObj)
    {
        return retObj;
    }
    if (typeof(dupeObj) == 'object')
    {
        if (typeof(dupeObj.length) != 'undefined')
        {
            retObj = new Array(dupeObj.length);
            for (ind = 0; ind < dupeObj.length; ++ind)
            {
                child = dupeObj[ind];
                retObj[ind] = copyJSONObj(child);
            }
            return retObj;
        }
        retObj = new Object();
        for (objInd in dupeObj)
        {
            if (!dupeObj.hasOwnProperty(objInd))
            {
                continue;
            }
            child = dupeObj[objInd];
            retObj[objInd] = copyJSONObj(child);
        }
    }
    return retObj;
}


myServicesTree0 = {
    'id': 'root',
    'children': [
        {
            name: 'Banking and Finance Law', 'id': '0',
            'children': [
                {
                    name: 'Advising on financial products',
                    description: 'Advising on the full range of financial products, ' +
                        'including syndicated loans, loan participation notes, project financing,' +
                        ' financing of stock and assets purchase',
                    'id': '0.0', price: '999', sharing: '5', 'leaf': true
                },
                {
                    name: 'Drafting of loans and credit facilities',
                    description: 'Drafting of various loan and credit facilities' +
                        ' agreements for servicing debt financing transactions',
                    'id': '0.1', price: '800', sharing: '5', 'leaf': true
                },
                {
                    name: 'Drafting of fulfillment of borrower’s obligations',
                    description: 'Drafting of contracts ensuring/guaranteeing the fulfillment of borrower’s' +
                        ' obligations under loan and credit facility agreements',
                    'id': '0.2', price: '400', sharing: '5', 'leaf': true
                },
                {
                    name: 'Debt financing negotiations participation',
                    description: 'Participation in negotiations with parties to deals on debt financing in Ukraine' +
                        ' and on international markets as well as with regulatory authorities',
                    'id': '0.3', price: '700', sharing: '5', 'leaf': true
                }
            ]
        },
        {
            name: "Commercial Law and Contracts", 'id': '1',
            'children': [
                {
                    name: 'Legal Consulting', description: 'Comprehensive Legal Consulting', 'id': '1.0',
                    'children': [
                        {
                            name: 'Transactions optimization',
                            description: 'Optimizing transactions in view of business risks and costs',
                            'id': '1.0.0', price: '650', sharing: '5', 'leaf': true
                        },
                        {
                            name: 'Legal due diligence conducting ',
                            description: 'Conducting legal due diligence of various targets',
                            'id': '1.0.1', price: '1999', sharing: '5', 'leaf': true
                        },
                    ]
                },
                {
                    name: "Contracts", 'id': '1.1',
                    'children': [
                        {
                            name: 'Agreements negotiations',
                            description: 'Conducting negotiations on the conclusion of various types of agreements',
                            'id': '1.1.0', price: '1099', sharing: '5', 'leaf': true},
                        {
                            name: 'Agreements analysis',
                            description: 'Analysis of various types of agreements',
                            'id': '1.1.1', price: '800', sharing: '5', 'leaf': true},
                        {
                            name: 'Agreements drafting',
                            description: 'Drafting of sales, services, lease, loan, investments, agency,' +
                                ' distribution etc. agreements;',
                            'id': '1.1.2', price: '1001', sharing: '5', 'leaf': true}
                    ]
                }
            ]
        },
        {
            name: "Competition Law", 'id': '2',
            'children': [
                {
                    name: 'Consultations', 'id': '2.0',
                    'children': [
                        {
                            name: 'Consultations on companies concentration',
                            description: 'Consultations on matters involving anticompetitive concerted practices, abuse of dominant position, ' +
                                'competition legislation requirements for concentration of Ukrainian and international companies',
                            'id': '2.0.0', price: '998', sharing: '5', 'leaf': true
                        },
                        {
                            name: 'Developing transaction schemes',
                            description: 'Developing transaction schemes',
                            'id': '2.0.1', price: '990', sharing: '5', 'leaf': true
                        },
                        {
                            name: 'Developing optimized transaction schemes',
                            description: 'Developing optimized transaction schemes which simplify transactions ' +
                                'to meet Ukrainian competition law requirements',
                            'id': '2.0.2', price: '1990', sharing: '5', 'leaf': true
                        }
                    ]
                },
                {
                    name: "Legal Due Diligence", 'id': '2.1',
                    'children': [
                        {
                            name: 'Due diligence in prior transactions',
                            description: 'Due diligence to identify any infringements of competition legislation in prior transactions',
                            'id': '2.1.0', price: '1050', sharing: '5', 'leaf': true
                        },
                        {
                            name: 'Due diligence of contracts and distribution schemes',
                            description: 'Due diligence of contracts and distribution schemes with regard to compliance ' +
                                'with Ukrainian competition legislation',
                            'id': '2.1.1', price: '1199', sharing: '5', 'leaf': true
                        },
                        {
                            name: 'Due diligence of clients’ activity',
                            description: 'Due diligence of clients’ activity to advise on possible risk of penalties for infringements ' +
                                'of Ukrainian competition legislation;',
                            'id': '2.1.2', price: '1299', sharing: '5', 'leaf': true
                        }
                    ]
                },
                {
                    name: "Multi-Jurisdictional Transactional Support", 'id': '2.2',
                    'children': [
                        {
                            name: 'Representing clients',
                            description: 'Representing clients in multi-jurisdictional transactions',
                            'id': '2.2.0', price: '1399', sharing: '5', 'leaf': true},
                    ]
                },
                {
                    name: "Obtaining Consents from the AMC", 'id': '2.3',
                    'children': [
                        {
                            name: 'Obtaining consents',
                            description: 'Obtaining consents from the AMC for concerted practices and concentrations',
                            'id': '2.3.0', price: '2999', sharing: '5', 'leaf': true
                        },
                    ]
                }
            ]
        }
    ]
};

var myServicesTree;
var myLawerServicesTree;
var myLawerAllServicesTree;
var myClientServicesTree;
var myDealServicesTree;

clearAndInitAllServiceTreeStores = function ()
{
    myServicesTree = copyJSONObj(myServicesTree0);
    myLawerServicesTree = copyJSONObj(myServicesTree0);
    myLawerAllServicesTree = copyJSONObj(myServicesTree0);
    myClientServicesTree = copyJSONObj(myServicesTree0);
    myDealServicesTree = copyJSONObj(myServicesTree0);
}

clearAndInitAllServiceTreeStores();
