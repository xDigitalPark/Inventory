// Ext.define('VERT.Portal.view.reporting.PodCtrl', {
//     extend: 'Ext.app.ViewController',
//     alias: 'controller.vert-podctrl',
//
//     require: [
//         'VERT.Portal.service.pod.PodService',
//         'VERT.Portal.service.chart.ChartBuilderFactory'
//     ],
//
//     config: {
//         podService: Ext.create('VERT.Portal.service.pod.PodService'),
//         chartBuilderFactory: Ext.create('VERT.Portal.service.chart.ChartBuilderFactory')
//     },
//
//     init: function(view) {
//         var me = this,
//             config;
//
//         config = me.loadConfig(view.getPodId());
//         config.then({
//             success: me.onLoadConfig,
//             scope: me
//         });
//     },
//
//     loadConfig: function(podId) {
//         var me = this,
//             config;
//
//         config = me.getPodService().retrieveConfig(podId);
//
//         return config;
//     },
//
//     onLoadConfig: function(config) {
//         var me = this,
//             vm = me.getViewModel(),
//             data;
//
//         vm.set('podConfig', config);
//         data = me.loadData(config.dataSourceId);
//
//         data.then({
//             success: me.onLoadData,
//             scope: me
//         });
//         me.createChart(config);
//     },
//
//     loadData: function(dataSourceId) {
//         var me = this,
//             data;
//
//         data = me.getPodService().retrieveData(dataSourceId);
//
//         return data;
//     },
//
//     onLoadData: function(data) {
//         var me = this,
//             vm = me.getViewModel(),
//             vw = me.getView(),
//             chart = null;
//
//         chart = vw.lookupReference('chart');
//
//         chart.getStore().loadData(data.records);
//         vm.set('podData', data);
//         vw.setLoading(false);
//     },
//
//     createChart: function(config) {
//         var me = this,
//             chartBuilder = me.getChartBuilderFactory().getBuilder(config),
//             vw = me.getView(),
//             vm = me.getViewModel(),
//             chart;
//
//         chart = chartBuilder.buildChart(config);
//
//         Ext.suspendLayouts();
//         vw.removeAll(true);
//         vw.setLoading(true);
//         vw.add(chart);
//         vm.set('loadingMessage', null);
//         Ext.resumeLayouts(true);
//     }
// });
