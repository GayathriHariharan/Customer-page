var customerModel = Backbone.Model.extend({

	defaults    :   {	
					customerName		 : "",
					customerEmailAddress : "",
					customerMobileNumber : ""
				    },
	urlRoot		: "/customer"

	

});