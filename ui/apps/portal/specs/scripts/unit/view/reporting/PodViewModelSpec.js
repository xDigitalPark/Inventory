(function() {
  describe("Unit Tests", function() {
        describe("PodViewModel", function(){

            var podVM = Ext.create('VERT.Portal.view.reporting.PodViewModel');

            it("should be able to create an instance.", function() {
                expect(podVM).not.toBeNull();
            });

            it("should be a ViewModel", function(){
                var isModelViewInstance = podVM instanceof Ext.app.ViewModel;
                expect(isModelViewInstance).toBeTruthy();
            });

            it("should has data", function(){
                expect(podVM.get('podData')).toBeTruthy();
            });

            it("should has config", function(){
                expect(podVM.get('podConfig')).toBeTruthy();
            });
        });
  });
})();
