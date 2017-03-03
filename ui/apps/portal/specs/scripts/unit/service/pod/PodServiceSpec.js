(function() {

    describe("Unit Tests", function() {

        describe("PodService", function() {

            var podService = Ext.create('VERT.Portal.service.pod.PodService');

            it("should return a Pod configuration promise based on podId.", function() {
                var config = null,
                    podId = 1,
                    isPromise = false;

                config = podService.retrieveConfig(podId);
                isPromise = config instanceof Ext.promise.Promise;
                expect(isPromise).toBeTruthy();
            });

            it("should return a Data promise base on dataSourceId.", function() {
                var data = null,
                    sourceId = 1,
                    isPromise = false;

                data = podService.retrieveData(sourceId);
                isPromise = data instanceof Ext.promise.Promise;
                expect(isPromise).toBeTruthy();
            });

        });
    });
})();
