var loginModel = Backbone.Model.extend({

	defaults    :   {	
					type			  : "",
					loginEmailAddress : "",
					loginPassword	  : ""
				    },
				 
	// idAttribute : "loginEmailAddress",
	
	urlRoot		: "/signup"
	
	

	

});

