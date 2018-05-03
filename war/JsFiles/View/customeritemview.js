var customerItemView = Backbone.View.extend({

	render			 : function(m)
					   {
						if(m != undefined)
						   {
							selectedModelId = m.cid;
							var template = _.template( $("#customerProfile_template").html());
							var temp = template(m.toJSON());
					      	this.$el.html(temp);
						   }
						else
						   {
							$("#customerDetails").remove();
						   }
						
					   },
	events			 : {
						"click #update" : "updateModel"
					   },
    updateModel		 : function()
					   {
    	
						var currentModel = collection.get({ cid : selectedModelId });
						console.log(currentModel);
						currentModel.set( "customerName" , $("#customerName").val() );
						currentModel.set( "customerEmailAddress" , $("#customerEmailaddress").val() );
						currentModel.set( "customerMobileNumber" , $("#customerMobilenumber").val() );
						$("#"+selectedModelId).text($("#customerName").val());
					   }
   


});