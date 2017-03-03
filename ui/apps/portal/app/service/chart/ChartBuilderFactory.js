Ext.define('VERT.Portal.service.chart.ChartBuilderFactory', {

    getBuilder: function(config) {
        return Ext.create('VERT.Portal.service.chart.AreaChartBuilder');
    }

});
