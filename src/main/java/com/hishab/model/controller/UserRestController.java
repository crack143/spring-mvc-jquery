package com.hishab.model.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hishab.model.User;
import com.hishab.model.repo.UserRepository;



@RestController
@RequestMapping("/api")
public class UserRestController {
	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping(value="/user" ,method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<User>> getAll(){
		List<User> user = userRepository.findAll();
	        return new ResponseEntity<List<User>>(HttpStatus.OK);
			
		}
	
	@RequestMapping(value="/users",method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)  //saveLoc uri in action="/saveLoc" jsp
	public List<User> getLocation(){
		List<User> user = userRepository.findAll();
		return user;
	}
		
	
	}
