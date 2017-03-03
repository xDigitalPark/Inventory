Ext.define('VERT.Portal.service.chart.AreaChartBuilder', {

    buildChart: function(config) {
        var me = this,
            areaChart = null,
            store = null;

        store = me.createStore(config);
        areaChart = Ext.create('Ext.chart.CartesianChart', {
            reference: 'chart',
            width: '100%',
            height: config.height,
            store: store,
            axes: config.axes,
            series: config.series
        });

        return areaChart;
    },

    createStore: function(config) {
        var me = this,
            store = null,
            series = config.series[0],
            fields = null;

        fields = [series.xField].concat(series.yField);
        store = Ext.create('Ext.data.Store', {
            fields: fields,
            data: []
        });

        return store;
    }

});
