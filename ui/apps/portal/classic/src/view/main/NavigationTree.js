Ext.define('VERT.Portal.view.main.NavigationTree', {
    extend: 'Ext.tree.Panel',
    xtype: 'navigation-tree',
    require: [
        'VERT.Portal.view.main.NavigationTreeController'
    ],

    controller: 'navigation-tree-controller',

    rootVisible: false,
    width: 200,
    useArrows: true,
    root: {
        text: 'Root',
        expanded: true,
        children: [
            {
                iconCls: 'x-fa fa-shopping-cart',
                text: 'Ventas',
                expanded: true,
                children: [
                    {
                        iconCls: 'x-fa fa-pencil-square',
                        text: 'Nueva Venta',
                        leaf: true
                    },
                    {
                        iconCls: 'x-fa fa-list',
                        text: 'Listar Ventas',
                        leaf: true
                    }
                ]
            },
            {
                iconCls: 'x-fa fa-th',
                text: 'Logistica',
                expanded: false,
                children: [
                    {
                        iconCls: 'x-fa fa-truck',
                        text: 'Recepcionar',
                        leaf: true
                    },
                    {
                        iconCls: 'x-fa fa-exchange',
                        text: 'Transferencias',
                        leaf: true
                    },
                    {
                        iconCls: 'x-fa fa-th-list',
                        text: 'Productos',
                        leaf: true
                    },
                    {
                        iconCls: 'x-fa fa-archive',
                        text: 'Almacenes',
                        leaf: true
                    },
                    {
                        iconCls: 'x-fa fa-list-ol',
                        text: 'Existencias',
                        leaf: true
                    }
                ]
            },
            {
                // iconCls: 'x-fa fa-bar-chart',
                iconCls: 'x-fa fa-book',
                text: 'Reportes',
                expanded: false,
                children: [
                    {
                        iconCls: 'x-fa fa-line-chart',
                        text: 'Reporte Diario',
                        leaf: true
                    },
                    {
                        iconCls: 'x-fa fa-bar-chart',
                        text: 'Kardex Valorado',
                        leaf: true
                    }
                ]
            },
            {
                iconCls: 'x-fa fa-cog',
                text: 'Administracion',
                expanded: false,
                children: [
                    {
                        iconCls: 'x-fa fa-users',
                        text: 'Seguridad',
                        leaf: true
                    }
                ]
            },
            {
                iconCls: 'x-fa fa-sign-out',
                text: 'Cerrar sesion',
                leaf: true
            }
        ]
    },
    listeners: {
        itemclick: 'onNavigationItemClick'

    }
});