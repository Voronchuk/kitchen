var regionDepartmentsTree = {
    'id': 'root',
    'expanded': true,
    'checked': true,
    'children': [
        {
            'id': 'world', 'text': 'World', 'expanded': true, 'checked': true,
            'children': [
                {   'id': '0',
                    'children': [
                        {
                            'id': '0.0',
                            'children': [
                                {'id': 'dep.12', 'text': 'dep.12', 'leaf': true, 'checked': true},
                                {'id': 'dep.13', 'text': 'dep.13', 'leaf': true, 'checked': true},
                            ],
                            'text': 'Kiew', 'checked': true,
                        },
                        {
                            'text': 'Odessa', 'id': '0.1', 'checked': true,
                            'children': [
                                {'text': 'dep.14', 'leaf': true, 'checked': true},
                            ]
                        }
                    ],
                    'text': 'Ukraine', 'expanded': true, 'checked': true,
                },
                {
                    'text': "Germany", 'id': '1', 'expanded': true, 'checked': true,
                    'children': [
                        {
                            'text': 'Berlin', 'id': '1.0', 'checked': true,
                            'children': [
                                {'text': 'dep.15', 'leaf': true, 'checked': true},
                                {'text': 'dep.16', 'leaf': true, 'checked': true},
                            ]
                        },
                        {
                            'text': "Frankfurt", 'id': '1.1', 'checked': true,
                            'children': [
                                {'text': 'dep.17', 'leaf': true, 'checked': true}
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

Ext.define('LawerAdminApp.store.regionDepartmentsTree', {

    extend: 'Ext.data.TreeStore',
    storeId: 'regionDepartmentsTree',

    root: regionDepartmentsTree

});
