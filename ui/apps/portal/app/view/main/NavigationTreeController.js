Ext.define('VERT.Portal.view.main.NavigationTreeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.navigation-tree-controller',

    onNavigationItemClick: function(s, item) {
        var tabText = item.get('text');
        var view = this.getView();
        var mainTabPanel = view.up().up().down('main-tab-panel');
        mainTabPanel.addTab(tabText);

    }
});