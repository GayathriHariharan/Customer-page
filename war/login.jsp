<html>


    <head>
        <title>Login page</title>
    </head>
    
    <body>
    
    	<script type="text/template" id="loginForm_template">

			<input type="text" id="loginEmail" placeholder="Email address" required><br><br>
            <input type="text" id="loginPassword" placeholder="Password" required><br><br>
			<input type="button" id="login" value="Login">

		</script>
		
		
		<script type="text/template" id="createAccountButton_template">

			<div id="createAccButton">
				<input type="button" id="createAccountButton" value="createAccount">
			</div>

		</script>
		
		
		<script type="text/template" id="signupForm_template">

			<input type="text" id="signupEmail" placeholder="Email address" required><br><br>
            <input type="text" id="signupPasswordOne" placeholder="Password" required><br><br>
            <input type="text" id="signupPasswordTwo" placeholder="Confirm Password" required><br><br>
			<input type="button" id="signup" value="Create Account">  <input type="button" id="backToLogin" value="Back to Login">

		</script>
    
    
    	<div id="loginPage">
    	
    		<div id="loginDiv"></div>
    		
    	</div>
    	
    	
    </body>
    
    
    
    
    <script type = "text/javascript" src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
 	<script type = "text/javascript" src = "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
	<script type = "text/javascript" src = "https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min.js"></script>
    
    
    <script src="/JsFiles/Models/loginmodel.js"></script>
	<script src="/JsFiles/View/loginview.js"></script>   
	
	 
    
    <link rel = "stylesheet" type="text/css" href = "/customerpagestyle.css" />
    
   <script>
		_.templateSettings = {
		interpolate: /\<\@\=(.+?)\@\>/gim,
		evaluate: /\<\@([\s\S]+?)\@\>/gim,
		escape: /\<\@\-(.+?)\@\>/gim
		};
   </script>
   
 </html>