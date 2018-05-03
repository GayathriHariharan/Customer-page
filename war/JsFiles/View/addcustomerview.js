$(document).ready(function(){
	addCustomer = new addCustomerView({ el : "#addCustomer" });
});

var addCustomerView = Backbone.View.extend({
	
	initialize		 : function()
					   {
						 itemView = new customerItemView({ el : "#customerDetails"  });
						 collection  = new customerCollection();
						 this.render(); 
					   },
					   
	events			 : {
						 "click #add"   : "displayForm",
						 "click #save"  : "saveCustomer",
						 "click #close" : "closeForm"
					   },
	
	displayForm		 : function()
					   {
						var template = _.template( $("#addCustomerForm_template").html() , {} );
				      	this.$el.append(template);
				      	$("#customerName").focus();
					   },
					   
	saveCustomer	 : function()
					   {
						if($("#customerName").val() != "")
							{
								var model = new customerModel({	
									customerName		 : $("#customerName").val(),
									customerEmailAddress : $("#customerEmailaddress").val(),
									customerMobileNumber : $("#customerMobilenumber").val()
								   	});
								
								model.save();
								
								var template = _.template( $("#plusButton_template").html() , {} );
						      	this.$el.html(template);
						      	collection.add(model);
						      	
								listView = new customerListView({model:model});
								$("#displayCustomerList ul").append(listView.render().el);
								
							}
						else
							{
							$("#customerName").css("background-color", "#ff9896");
							}
						
					   },

	closeForm		 : function()
					   {
						var template = _.template( $("#plusButton_template").html() , {} );
				      	this.$el.html(template);
					   },
					   
	render			 : function()
					   {
		              	var template = _.template( $("#plusButton_template").html() , {} );
		              	this.$el.html(template);
		              	collection.fetch({
		              		success	: function(collection)
		              				  {
		              					if(collection.at(0) != undefined) 
		              						{
		              						console.log(collection);
		              						for(var i=0; i<collection.length; i++) 
		              							{
			              							console.log(collection.at(i));
													listView = new customerListView({model:collection.at(i)});
													$("#displayCustomerList ul").append(listView.render().el);
		              							}
		              							
		              						}
		              				  },
		              		error	: function(collection,response)
		              				  {
		              					alert("inside error");
		              					console.log(response);
		              				  }
		              	});
		              	
					   }

});


