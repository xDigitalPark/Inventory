Ext.require([
    'Ext.app.Application'
]);

Ext.Loader
    .setConfig({
        enabled: true,
        disableCaching: false
    })
    .setPath({
        'VERT.Portal.fake': 'specs/fake',
        'VERT.Portal': 'app',
        'VERT.Portal.view.reporting.PodView': 'classic/src/view/reporting/PodView.js',
        'VERT.Portal.view.page.PageView': 'classic/src/view/page/PageView.js',
        'Ext.chart': '../ext/packages/charts/src/chart'
    });

var testSpecs = [
    'SanitySpec.js',

    // Unit Tests
    // Reporting
    'unit/view/reporting/PodViewSpec.js',
    'unit/view/reporting/PodCtrlSpec.js',
    'unit/view/reporting/PodViewModelSpec.js',
    // Page
    'unit/view/page/PageViewSpec.js',

    'unit/service/pod/PodServiceSpec.js',
    'unit/service/chart/ChartBuilderFactorySpec.js',
    'unit/service/chart/AreaChartBuilderSpec.js',
    // Integration Tests
    'integration/view/reporting/PodViewSpec.js',
];

for (var i = 0; i < testSpecs.length; i++) {
    Ext.Loader.loadScript({ url: 'specs/scripts/' + testSpecs[i] });
}

Ext.application({
    name: 'VERT.Portal.Tests'
});

Ext.syncRequire(['VERT.Portal.service.pod.PodService', 'VERT.Portal.view.reporting.PodCtrl', 'VERT.Portal.view.reporting.PodViewModel']);
