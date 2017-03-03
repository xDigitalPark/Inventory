(function() {

	describe('Base Testing Architecture', function() {

		it('Jasmine Is Running Successfull', function() {
			expect(true).toEqual(true);
		});

		it('ExtJS6 Is Running Successfull', function() {
			expect(Ext).toBeDefined();
			expect(Ext.getVersion()).toBeTruthy();
			expect(Ext.getVersion().major).toEqual(6);
		});

	});

})();
