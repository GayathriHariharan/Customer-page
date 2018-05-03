var customerCollection = Backbone.Collection.extend({

		model : customerModel,
		url   : "/fetchcustomerlist"

});