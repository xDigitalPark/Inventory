/**
 * This view is an example list of people.
 */
Ext.define('VERT.Portal.view.logistic.ProductList', {
    extend: 'Ext.grid.Panel',
    xtype: 'product-list-tab',
    columnLines: true,
    closable: true,
    title: "Productos",
    tbar: [
        {
            tooltip: 'Crear nuevo producto',
            iconCls: 'x-fa fa-plus'
        },
        {
            tooltip: 'Eliminar productos seleccionados',
            iconCls: 'x-fa fa-trash'
        }
    //     {
    //     xtype: 'splitbutton',
    //     text: 'Menu Button',
    //     iconCls: null,
    //     glyph: 61,
    //     menu: [{
    //         text: 'Menu Button 1'
    //     }]
    // }, '-', {
    ],
    selModel: {
        type: 'checkboxmodel',
        listeners: {
            // selectionchange: 'onSelectionChange'
        }
    },
    store: {
        autoLoad: true,
        data: [
            {code: 'XXD001', name: 'Billetera Fantasy', brand: 'Double', price: 119.9, detail: '100% Cuero', category: 'Billetera'},
            {code: 'XXD001', name: 'Monedero', brand: 'Double', price: 29.9, detail: '100% Cuero', category: 'Billetera'},
            {code: 'XXD001', name: 'Billetera Xtreme', brand: 'Double', price: 159.9, detail: '100% Cuero', category: 'Billetera'},
            {code: 'XXD001', name: 'Billetera Fantasy', brand: 'Double', price: 119.9, detail: '100% Cuero', category: 'Billetera'},
            {code: 'XXD001', name: 'Monedero', brand: 'Double', price: 29.9, detail: '100% Cuero', category: 'Billetera'},
            {code: 'XXD001', name: 'Billetera Xtreme', brand: 'Double', price: 159.9, detail: '100% Cuero', category: 'Billetera'},
            {code: 'XXD001', name: 'Billetera Fantasy', brand: 'Double', price: 119.9, detail: '100% Cuero', category: 'Billetera'},
            {code: 'XXD001', name: 'Monedero', brand: 'Double', price: 29.9, detail: '100% Cuero', category: 'Billetera'},
            {code: 'XXD001', name: 'Billetera Xtreme', brand: 'Double', price: 159.9, detail: '100% Cuero', category: 'Billetera'},
            {code: 'XXD001', name: 'Billetera Fantasy', brand: 'Double', price: 119.9, detail: '100% Cuero', category: 'Billetera'},
        ]
    },
    columns: [
        {
            xtype: 'rownumberer'
        },
        {text: 'Codigo', dataIndex: 'code', width: 100},
        {text: 'Nombre', dataIndex: 'name', width: 250, locked: false},
        {text: 'Categoria', dataIndex: 'category'},
        {text: 'Marca', dataIndex: 'brand'},
        {text: 'Detalle', dataIndex: 'detail', flex: 2},
        {
            text: 'Precio', dataIndex: 'price',
            renderer: function (val) {
                return "S/. " + val;
            }
        },
        {
            xtype: 'actioncolumn',
            width: 35,
            items: [
                {
                    iconCls: 'x-fa fa-pencil'
                }
            ]

        }
    ]
    ,

    // bbar: {
    //     xtype: 'pagingtoolbar',
    //     pageSize: 10,
    //     // store: store,
    //     displayInfo: true
    // },
    // inline buttons
    // dockedItems: [
    //      {
    //     xtype: 'toolbar',
    //     items: [{
    //         reference: 'removeButton',  // The referenceHolder can access this button by this name
    //         text: 'Eliminar',
    //         tooltip: 'Eliminar productos seleccionados.',
    //         iconCls:'x-fa fa-trash',
    //         disabled: true
    //     },'->',{
    //         text: 'Nuevo Producto',
    //         tooltip: 'Crear nuevo producto y agregarlo a la lista.',
    //         iconCls: 'x-fa fa-plus'
    //     }]
    // }]
    // listeners: {
    //     select: 'onItemSelected'
    // }
});