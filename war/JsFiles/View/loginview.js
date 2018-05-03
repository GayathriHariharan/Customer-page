$(document).ready(function(){
	loginView = new loginViewPage({ el : "#loginPage" });
});

var loginViewPage = Backbone.View.extend({
	
	initialize		    : function()
						  {
							this.render();
						  },
				  
	render		        : function()
						  {
							var template = _.template( $("#loginForm_template").html() , {} );
					      	$("#loginDiv").html(template);
					      	
					      	templateOne = _.template( $("#createAccountButton_template").html() , {} );
					      	this.$el.append(templateOne);
					      	
						  },
						  
   events	            : {
					 		"click #createAccountButton" : "displaySignupForm",
					 		"click #login"				 : "login",
					 		"click #backToLogin"		 : "render",
					 		"click #signup"				 : "signup"
			   			  },
			   			  
   displaySignupForm	: function()
   						  {
	   					   $("#createAccountButton").remove();
						   var template = _.template( $("#signupForm_template").html() , {} );
						   $("#loginDiv").html(template);
   						  },
   						  
   login				: function()
   						  {
	   					   if($("#loginEmail").val() != "")
	   						   {
	   						   	if($("#loginPassword").val() != "")
	   						   		{
			   						   	var model = new loginModel({	
											type				: "login",
			   						   		loginEmailAddress	: $("#loginEmail").val(),
											loginPassword 		: $("#loginPassword").val()
										   	});
			   						   
										model.save(null,{
											   		success: function(model,response)
											   				 {
													   			if(response.response == "password matched"){
													   					$(location).attr('href', '/customer.jsp');
													   				}
													   			else if((response.response == "wrong password")){
													   					alert("passwod incorrect");
													   				}
													   			else if((response.response == "not yet registered")){
													   					alert("You have not yet registered");
													   				}
											   				  },
											   		 error  : function(model,response)
											   		 		  {	
											   			 		alert("error");
													   		  }
									   				});
	   						   		}
	   						   	else
	   						   		{
	   						   		 $("#loginPassword").css("background-color", "#ff9896");
	   						   		}
	   						   }
	   					   else
	   						   {
	   						    $("#loginEmail").css("background-color", "#ff9896");
	   						   }
   						  },
   						  
   signup				: function()
   						  {
						   if($("#signupEmail").val() != "")
							   {
								   	if($("#signupPasswordOne").val() != "")
								   		{
									   		if($("#signupPasswordTwo").val() == $("#signupPasswordOne").val())
									   			{
											   	var model = new loginModel({	
													type			    : "signup",
											   		loginEmailAddress	: $("#signupEmail").val(),
													loginPassword 		: $("#signupPasswordOne").val()
												   	});
											   	
											    model.save(null,{
														   		success: function(model,response)
																   		 {	
																   			if(response.response == "successfully registered"){
																   					$(location).attr('href', '/customer.jsp');
																   				}
																   			else if(response.response == "email already exist"){
																   					alert("Email already registered");
																   				}
														   				 },
														   		error  : function(model,response)
														   				 {
														   					alert("error");
														   				 }
														   });
											  
									   			}
									   		else
									   			{
									   			 $("#signupPasswordTwo").css("background-color", "#ff9896");
									   			}
								   		}
								   	else
								   		{
								   		 $("#signupPasswordOne").css("background-color", "#ff9896");
								   		}
							   }
						   else
							   {
							     $("#signupEmail").css("background-color", "#ff9896");
							   }
   						  }
	
});