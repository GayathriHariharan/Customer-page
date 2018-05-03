<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<!-- The HTML 4.01 Transitional DOCTYPE declaration-->
<!-- above set at the top of the file will set     -->
<!-- the browser's rendering engine into           -->
<!-- "Quirks Mode". Replacing this declaration     -->
<!-- with a "Standards Mode" doctype is supported, -->
<!-- but may lead to some differences in layout.   -->

<html>


    <head>
        <title>CustomerPage</title>
    </head>
   

    <body>
    
       <div id="titleBar"><div id="titleText">Customers</div></div>
        
       <script type="text/template" id="addCustomerForm_template">
			<div id="popupForm">
			<h3 class="popover-title">Add new customer</h3>
			<div class="popover-content">
         	<br><input type="text" id="customerName" placeholder="Name" required><br><br>
            <input type="text" id="customerEmailaddress" placeholder="Email address" required><br><br>
            <input type="text" id="customerMobilenumber" placeholder="Mobile number" required><br><br>
			<input type="button" id="save" value="Save">  <input type="button" id="close" value="Close">
			</div>
			</div>
        </script>
        
        <script type="text/template" id="plusButton_template">
			
        	<a id="add">+</a>
			
        </script>
        
        <script type="text/template" id="customerProfile_template">
			<table>
         	<tr> <td><label for="customerName">Name</label></td>   <td><input type="text" id="customerName" placeholder="Name" value=<@= customerName @>></td></tr>
            <tr> <td><label for="customerEmailaddress">Email</label></td>   <td><input type="text" id="customerEmailaddress" placeholder="Email address" value=<@= customerEmailAddress @>></td></tr>
            <tr> <td><label for="customerMobilenumber">Mobile</label></td>   <td><input type="text" id="customerMobilenumber" placeholder="Mobile number" value=<@= customerMobileNumber @>></td></tr>
			<tr><td><input type="button" id="update" value="UPDATE"><td><tr>
			<table>
		</script>
		
		<script type="text/template" id="deleteConfirm_template">
		<div id="deletePopup">
		<h3 class="popover-title">Delete Customer?</h3>
		<div class="popover-content">
		<input type="button" id="confirmDelete" value="Delete">  <input type="button" id="cancelDelete" value="Cancel">
		</div>
		</div>
		</script>
		

        <div id="container">
        
        
		        <div id="leftDiv">
				        <div id="addCustomer"></div>
				        <div id="displayCustomerList"><ul id="customerList"></ul></div>
		        </div>
        
        
		        <div id="rightDiv">
		        		<div id="customerDetails"></div>
		        </div>
        
        
        </div>    
        

    </body>
    

   	<script type = "text/javascript" src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
 	<script type = "text/javascript" src = "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
	<script type = "text/javascript" src = "https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min.js"></script>

    <script src="/JsFiles/Models/customermodel.js"></script>
    <script src="/JsFiles/Collection/customercollection.js"></script>
    <script src="/JsFiles/View/customeritemview.js"></script>
    <script src="/JsFiles/View/customerlistview.js"></script>
    <script src="/JsFiles/View/addcustomerview.js"></script>

   
    <link rel = "stylesheet" type="text/css" href = "/customerpagestyle.css" />
   
   
   <script>
		_.templateSettings = {
		interpolate: /\<\@\=(.+?)\@\>/gim,
		evaluate: /\<\@([\s\S]+?)\@\>/gim,
		escape: /\<\@\-(.+?)\@\>/gim
		};
   </script>


</html>