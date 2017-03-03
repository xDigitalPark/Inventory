(function() {

    describe("Unit Tests", function() {

        describe("ChartBuilderFactory", function() {

            var chartBuilderFactory = Ext.create('VERT.Portal.service.chart.ChartBuilderFactory');

            it("should return an AreaChartBuilder instance when chart Type is 'area'.", function() {
                var config = {
                        podChartType: 'area'
                    }, chartBuilder;

                chartBuilder = chartBuilderFactory.getBuilder(config);
                isChartBuilder = (chartBuilder instanceof VERT.Portal.service.chart.AreaChartBuilder);

                expect(isChartBuilder).toBeTruthy();
            });
        });
    });
})();
