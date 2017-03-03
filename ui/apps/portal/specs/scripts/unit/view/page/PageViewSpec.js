(function() {

    describe("Unit Tests", function() {

        describe("PageView", function() {

            var pageVw = Ext.create('VERT.Portal.view.page.PageView');

            it("should be a panel container.", function() {
                var isPanelInstance = (pageVw instanceof Ext.panel.Panel);
                expect(isPanelInstance).toBeTruthy();
            });

            it("should be a reference holder.", function() {
                var isRefHolder = pageVw.referenceHolder;
                expect(isRefHolder).toBeTruthy();
            });

            it("should containt a 'Loading' title.", function() {
                var title = pageVw.getTitle();
                expect(title).toBe('Loading');
            });

            it("should contain a 'Loading' message in the body.", function() {
                var hasLoadingMessage = (pageVw.html.indexOf('Loading') >= 0);
                expect(hasLoadingMessage).toBeTruthy();
            });

            it("should contain a pageConfig cofiguration property.", function() {
                var isPageConfigGetter = Ext.isFunction(pageVw.getPageConfig);
                expect(isPageConfigGetter).toBeTruthy();
            });
        });
    });
})();
