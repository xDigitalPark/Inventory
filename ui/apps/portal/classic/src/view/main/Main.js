Ext.define('VERT.Portal.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'layout-border',
    requires: [
        'Ext.layout.container.Border',
        'VERT.Portal.view.main.MainTabPanel',
        'VERT.Portal.view.main.NavigationTree',
    ],

    viewModel: 'main-view-model',

    layout: 'border',
    bodyBorder: false,
    defaults: {
        collapsible: true,
        split: true
    },
    width: '500',
    height: '600',
    items: [
        {
            bind: {
              title: '{navigationTitle}'
            },
            region: 'west',
            floatable: false,
            width: 200,
            minWidth: 200,
            maxWidth: 200,
            items: [
                {
                    xtype: 'navigation-tree',
                }
            ]
        },
        {
            collapsible: false,
            region: 'center',
            items: [
                {
                    itemId: 'main-tab-panel',
                    xtype: 'main-tab-panel'
                }
            ]
        }
    ]
});