package com.hishap.rest;

import java.net.URISyntaxException;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hishab.model.User;
import com.hishab.model.repo.UserRepository;

@RestController
@RequestMapping("/api")
public class ApiTest {
	
	@Autowired
	private UserRepository userRepository;
	//How to get list of users
	
    @SuppressWarnings("unused")
	@RequestMapping(value = "/Users",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
        public ResponseEntity<List<User>> getAllUsers()
            throws URISyntaxException {
            
            List<User> users = userRepository.findAll();
            return new ResponseEntity<>(HttpStatus.OK);
        }
	
    @RequestMapping(value="/test-pro-ids",method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)  //saveLoc uri in action="/saveLoc" jsp
	public  ResponseEntity<String> delId(@RequestParam(value="ids",required=false) List<String> ids) throws URISyntaxException{
		
		 for (String data : ids) {
	            System.out.println("Your Data =>" + data);
	        }
		 return new ResponseEntity<>(HttpStatus.OK);
	};
       
    

}
