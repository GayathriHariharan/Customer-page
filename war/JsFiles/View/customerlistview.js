var customerListView = Backbone.View.extend({
	

	tagName			 : "li",
	events			 : {
						"click .customerNameDiv" : "display",
						"click .delete" 		 : "confirmDelete",
						"click #confirmDelete"	 : "deleteEntry",
						"click #cancelDelete"	 : "closeDelete"
					   },
	
	closeDelete		 : function()
					   {
						$("#deletePopup").remove();
					   },
					   
	render			 : function()
					   {
						
						this.$el.attr("class","iamli");
						this.$el.append("<div class='customerNameDiv' id='"+this.model.cid+"'>"+this.model.get("customerName")+"</div>");
						
						itemView.render(this.model);
					  	return this;
					   },
					   
	display			 : function()
					   {
						$("#deletePopup").remove();
						$(".iamli").css("background-color", "");
						$(".delete").remove();
						this.$el.append("<button class='delete' id='"+this.model.cid+"'>DELETE</button>");
						this.$el.css("background-color", "#d4d9dd");
						itemView.render(this.model);
					   },
	confirmDelete : function()
					   {
						$("#deletePopup").remove();
						var template = _.template( $("#deleteConfirm_template").html() , {} );
				      	this.$el.append(template);
					   },
					 
	deleteEntry		 : function()
					   {
						collection.remove(this.model);
						this.$el.remove();
						itemView.render(collection.at(0));
					   }
					   
	
});