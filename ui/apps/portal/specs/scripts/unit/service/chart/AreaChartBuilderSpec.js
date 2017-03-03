(function() {

    describe("Unit Tests", function() {

        describe("AreaChartBuilder", function() {

            var areaChartBuilder = Ext.create('VERT.Portal.service.chart.AreaChartBuilder');

            it("should be able to create an instance.", function() {
                expect(areaChartBuilder).not.toBeNull();
            });

            it("should be an AreaChartBuilder instance.", function(){
                var isAreaChartBuilder = areaChartBuilder instanceof VERT.Portal.service.chart.AreaChartBuilder;
                expect(isAreaChartBuilder).toBeTruthy();
            });

            xit("should create an AreaChart from a given configuration.", function() {
                var areaChart = null,
                    store = Ext.create('Ext.data.Store');
                    config = {
                        axes: [{},{}],
                        series: {
                            xField: 'name',
                            yField: ['data1', 'data2', 'data3']
                        }
                    },
                    isCartesian = false,
                    isAreaChart = false;

                spyOn(areaChartBuilder, 'createStore')
                    .and.returnValue(store);

                areaChart = areaChartBuilder.buildChart(config);

                isCartesian = (areaChart instanceof Ext.chart.CartesianChart);
                isAreaChart = (areaChart.series.type == 'area');
                expect(isCartesian).toBeTruthy();
                expect(isAreaChart).toBeTruthy();
                expect(areaChartBuilder.createStore).toHaveBeenCalledWith(config);

            });

            it("should be able to create a Store.", function(){
                var store = null,
                    config = {
                        series: [{
                            xField: 'name',
                            yField: ['data1', 'data2', 'data3']
                        }]
                    },
                    isStore = false,
                    fieldsAreCorrect = false,
                    fields = null;

                store = areaChartBuilder.createStore(config);
                isStore = (store instanceof Ext.data.Store);
                fields = store.config.fields;
                fieldsAreCorrect = (Ext.Array.contains(fields, 'name') &&
                                    Ext.Array.contains(fields, 'data1') &&
                                    Ext.Array.contains(fields, 'data2') &&
                                    Ext.Array.contains(fields, 'data3'));

                expect(isStore).toBeTruthy();
                expect(fieldsAreCorrect).toBeTruthy();

            });

        });
    });
})();
