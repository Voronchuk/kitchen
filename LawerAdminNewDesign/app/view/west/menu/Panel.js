Ext.define('LawerAdminApp.view.west.menu.Panel', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.menupanel',
    title: 'Control and Management',
    rootVisible: false,
    lines: false,
    useArrows: true,
    root: {
        expanded: true,
        children: [
            { text: 'Lawers', id: '0', leaf: false,
                children: [
                    {text: 'List', id: '0.0', leaf: true, },
                    {text: 'Details', id: '0.1', leaf: true,},
                ]},
            { text: 'Clients', id: '1', leaf: false,
                children: [
                    {text: 'List', id: '1.0', leaf: true, },
                    {text: 'Details', id: '1.1', leaf: true, },
                ]},
            { text: 'Services', id: '2', leaf: false,
                children: [
                    {text: 'List', id: '2.0', leaf: true, },
                    {text: 'Details', id: '2.1', leaf: true, },
                ]},
            { text: 'Practice', id: '3', leaf: false,
                children: [
                    {text: 'List', id: '3.0', leaf: true, },
                    {text: 'Details', id: '3.1', leaf: true, },
                ]},
            { text: 'Communication', id: '4', leaf: false,
                children: [
                    {text: 'Email', id: '4.0', leaf: true  },
                    {text: 'Chat', id: '4.1', leaf: true  }
                ]},
            { text: 'Admin Log', id: '5', leaf: true }
        ]
    }
});