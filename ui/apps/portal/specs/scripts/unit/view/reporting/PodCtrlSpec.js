(function() {

    describe("Unit Tests", function() {

        describe("PodCtrl", function() {

            var podCtrl = Ext.create('VERT.Portal.view.reporting.PodCtrl', {
                podService: {
                    retrieveConfig: function () {},
                    retrieveData: function () {},
                }
            });

            it("should load configuration based on Pod Id.", function() {
                var podId = 1,
                    deferred = Ext.create('Ext.Deferred'),
                    config = {
                        dataSourceId: 1
                    }, fakeView = {
                        getPodId: function() {
                            return podId;
                        }
                    };

                deferred.resolve(config);

                spyOn(podCtrl, 'loadConfig')
                    .and.returnValue(deferred.promise);
                spyOn(deferred.promise, 'then');

                podCtrl.init(fakeView);

                expect(podCtrl.loadConfig).toHaveBeenCalledWith(podId);
                expect(deferred.promise.then).toHaveBeenCalled();
                expect(deferred.promise.then.calls.mostRecent().args[0].success).toBe(podCtrl.onLoadConfig);

            });

            it("should request to Pod Service to retrieve Pod Configuration based on the Pod Id when Loading Configuration.", function() {
                var podId = 1;

                spyOn(podCtrl.getPodService(), 'retrieveConfig');

                podCtrl.loadConfig(podId);

                expect(podCtrl.getPodService().retrieveConfig).toHaveBeenCalledWith(podId);
            });

            it("should update pod view, create chart and load Pod Data when configuration is Loaded.", function() {
                var config = {
                        dataSourceId: 1
                    }, fakeVM = {
                        set: function() { }
                    }, deferred = Ext.create('Ext.Deferred');

                deferred.resolve(null);

                spyOn(podCtrl, 'loadData')
                    .and.returnValue(deferred.promise);
                spyOn(podCtrl, 'getViewModel')
                    .and.returnValue(fakeVM);
                spyOn(fakeVM, 'set');
                spyOn(deferred.promise, 'then');
                spyOn(podCtrl, 'createChart');

                podCtrl.onLoadConfig(config);

                expect(podCtrl.loadData).toHaveBeenCalledWith(config.dataSourceId);
                expect(podCtrl.getViewModel).toHaveBeenCalled();
                expect(fakeVM.set).toHaveBeenCalledWith('podConfig', config);
                expect(podCtrl.createChart).toHaveBeenCalledWith(config);
                expect(deferred.promise.then.calls.mostRecent().args[0].success).toBe(podCtrl.onLoadData);
            });


            it("should request to Pod Service to retrieve Pod Data based on the Pod DataSourceId when Loading Data.", function() {
                var dataSourceId = 1;

                spyOn(podCtrl.getPodService(), 'retrieveData');

                podCtrl.loadData(dataSourceId);

                expect(podCtrl.getPodService().retrieveData).toHaveBeenCalledWith(dataSourceId);
            });

            it("should create a chart and add it to the view.", function() {
                var config = {
                        podId: 1,
                        podTitle: 'Area Chart',
                        dataSourceId: 1,
                        podChartType: 'Area'
                    }, chart = {
                        xtype: 'component'
                    }, fakeVM = {
                        set: function() { }
                    }, fakeView = {
                        add: function() { },
                        removeAll: function() { },
                        setLoading: function(bar) { }
                    }, fakeBuilder = {
                        buildChart: function () { return chart; }
                    }, fakeBuilderFactory = {
                        getBuilder: function() { return fakeBuilder; }
                    };

                spyOn(podCtrl, 'getViewModel')
                    .and.returnValue(fakeVM);
                spyOn(podCtrl, 'getChartBuilderFactory')
                    .and.returnValue(fakeBuilderFactory);
                spyOn(podCtrl, 'getView')
                    .and.returnValue(fakeView);
                spyOn(fakeBuilder, 'buildChart')
                    .and.returnValue(chart);
                spyOn(fakeView, 'removeAll');
                spyOn(fakeView, 'add');
                spyOn(fakeVM, 'set');

                podCtrl.createChart(config);
                expect(fakeBuilder.buildChart).toHaveBeenCalledWith(config);
                expect(fakeView.removeAll).toHaveBeenCalled();
                expect(fakeView.add).toHaveBeenCalledWith(chart);
                expect(fakeVM.set).toHaveBeenCalledWith('loadingMessage', null);
            });

            it("should update pod data when Pod Data is Loaded.", function() {
                var data = {
                        records: []
                    }, fakeVM = {
                        set: function() { }
                    }, fakeVW = {
                        setLoading: function(bar) { },
                        lookupReference: function(bar) {
                            return {
                                getStore: function(){
                                    return {
                                        loadData: function(bar) {}
                                    }
                                }
                            }
                        }
                    },
                    chart = {
                        getStore: function() {
                            return { loadData: function(){}}
                        }
                    };

                spyOn(podCtrl, 'getViewModel')
                    .and.returnValue(fakeVM);
                spyOn(podCtrl, 'getView')
                    .and.returnValue(fakeVW);
                spyOn(fakeVM, 'set');

                podCtrl.onLoadData(data);

                expect(podCtrl.getViewModel).toHaveBeenCalled();
                expect(fakeVM.set).toHaveBeenCalledWith('podData', data);
            });

        });
    });
})();
