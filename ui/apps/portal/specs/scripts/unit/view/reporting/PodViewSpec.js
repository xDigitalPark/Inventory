(function() {

    describe("Unit Tests", function() {

        describe("PodView", function() {

            var pod = Ext.create('VERT.Portal.view.reporting.PodView');

            it("should be a panel container.", function() {
                var isPanelInstance = pod instanceof Ext.panel.Panel;
                expect(isPanelInstance).toBeTruthy();
            });

            it("should be a reference holder.", function() {
                var isRefHolder = pod.referenceHolder;
                expect(isRefHolder).toBeTruthy();
            });

            it("should not contain Items when created.", function() {
                var itemsCount = pod.items.length;
                expect(itemsCount).toBe(0);
            });

            it("should have a configuration property for podId.", function() {
                var podId = 1,
                    pod = Ext.create('VERT.Portal.view.reporting.PodView', {
                        podId: podId
                    });
                expect(pod.getPodId()).toBe(podId);
            });

            describe("Toolbar", function() {

                pending("Feature will be implemented in a future iteration.");

                // var tools = [];
                //
                // Ext.Array.forEach(pod.tools, function(tool){
                //     tools.push(tool.type);
                // });
                //
                // it("should have a refresh option.", function() {
                //     expect(tools).toContain('refresh');
                // });
                //
                // it("should have a fliters option.", function() {
                //     expect(tools).toContain('gear');
                // });
                //
                // it("should have a expand/collapse option.", function() {
                //     expect(tools).toContain('down');
                // });
                //
                // it("should have a help option.", function() {
                //     expect(tools).toContain('help');
                // });
                //
                // it("should have a fullscreen option.", function() {
                //     expect(tools).toContain('maximize');
                // });

            });
        });
    });
})();
