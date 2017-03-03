Ext.define('VERT.Portal.view.main.MainTabPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'main-tab-panel',
    require: [
        'VERT.Portal.view.logistic.ProductListTab'
    ],
    frame: false,
    items: [],

    addTab: function (tabText) {
        var me = this,
            tab = null,
            foundTab = null;

        if (tabText == 'Nueva Venta') {
            tab = Ext.create({xtype: 'product-list-tab', itemId: 'productlist-tab'});
        }

        foundTab = me.getComponent(tab.getItemId());
        if (!foundTab) {
            me.add(tab);
        } else {
            tab = foundTab;
        }
        me.setActiveTab(tab);
    }
});