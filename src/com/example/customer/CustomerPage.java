package com.example.customer;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.EntityNotFoundException;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.FilterPredicate;
import com.google.appengine.api.datastore.Query.Filter;
import com.google.appengine.api.datastore.Query.FilterOperator;
import com.google.appengine.labs.repackaged.org.json.JSONArray;
import com.google.appengine.labs.repackaged.org.json.JSONException;
import com.google.appengine.labs.repackaged.org.json.JSONObject;

@Controller

public class CustomerPage {
	
	DatastoreService ds = DatastoreServiceFactory.getDatastoreService();
	
	
	@RequestMapping(value="/")
	public String loadLoginPage(){
		return "login";
	}
	
	
	@RequestMapping(value="/signup")
	@ResponseBody
	public String saveSignupDataOrValidateLogin(@RequestBody String inputValue, HttpServletRequest request) throws JSONException{
		
		String response = null;
		JSONObject jsonObject = new JSONObject(inputValue);
			
			String type = jsonObject.getString("type");
			String password = jsonObject.getString("loginPassword");
			String email = jsonObject.getString("loginEmailAddress") ;
			
			Entity entity = new Entity("UserInfo" , email);
			
			if(type.equals("login")){
				System.out.println("inside login page");
				try{
					Entity loginEntity = ds.get(entity.getKey());
					
					if(password.equals(loginEntity.getProperty("password")))
					{
						response = "password matched";
						HttpSession session =  request.getSession();
						session.setAttribute("userEmail",email);
					}
					else
						response = "wrong password";
						
				   }
				catch(EntityNotFoundException e){
					
					response = "not yet registered";
					
				   }
			}
			else{
				System.out.println("inside signup page");
				try{
					
					ds.get(entity.getKey());
					response = "email already exist";
					
				   }
				catch(EntityNotFoundException e){
					
					entity.setProperty("password", password);
					ds.put(entity);
					response = "successfully registered";
					HttpSession session =  request.getSession();
					session.setAttribute("userEmail",email);
					
				   }
			}
			JSONObject response1 = new JSONObject("{response:"+response+"}");
			return response1.toString();	
	}
	
	
	@RequestMapping(value="/fetchcustomerlist")
	@ResponseBody
	public String fetchCustomerList(HttpServletRequest request) throws JSONException{
		
		HttpSession session =  request.getSession();
		String userEmail = (String) session.getAttribute("userEmail");
		
		
		JSONArray array	= new JSONArray();
		
		
		Filter filter = new FilterPredicate("userEmail",FilterOperator.EQUAL,userEmail);
		Query query	  = new Query("CustomerInfo").setFilter(filter);
		
		Iterable<Entity> result =   ds.prepare(query).asIterable();
		
		for(Entity e:result)
		   {
			JSONObject item = new JSONObject();
			item.put("customerName", e.getProperty("customerName"));
			item.put("customerEmailAddress", e.getProperty("customerEmailAddress"));
			item.put("customerMobileNumber", e.getProperty("customerMobileNumber"));
			
			array.put(item);
		   }
		
		return array.toString();
	}
	
	
	@RequestMapping(value="/customer")
	public void saveCustomer(@RequestBody String customerInfo, HttpServletRequest request) throws JSONException{
		
		HttpSession session =  request.getSession();
		String userEmail = (String) session.getAttribute("userEmail");
		
		JSONObject jsonObject = new JSONObject(customerInfo);
		
		String customerName   = jsonObject.getString("customerName");
		String customerEmail  = jsonObject.getString("customerEmailAddress");
		String customerMobile = jsonObject.getString("customerMobileNumber");
		
		Entity entity = new Entity("CustomerInfo");
		entity.setProperty("userEmail", userEmail);
		entity.setProperty("customerName", customerName);
		entity.setProperty("customerEmailAddress", customerEmail);
		entity.setProperty("customerMobileNumber", customerMobile);
		ds.put(entity);
		
	}
	
	
	
}
