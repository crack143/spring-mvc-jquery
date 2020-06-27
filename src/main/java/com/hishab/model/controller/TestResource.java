package com.hishab.model.controller;

import java.util.LinkedList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hishab.model.repo.UserRepository;


@Controller
public class TestResource {
	
    @PersistenceContext
    private EntityManager em;
	
	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping(value = "/test-pro1", method = RequestMethod.GET)
	public String testDashboard(Model model) {
		return "admin/test-pro";
	}
	
	@RequestMapping(value="/test-pro",method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)  //saveLoc uri in action="/saveLoc" jsp
	public String getNameAsDropDown(ModelMap modelMap){
		String[] names = userRepository.getDropdown();
		System.out.println(names);
		modelMap.addAttribute("names", names);
		return "admin/test-pro";
	};
	
	@RequestMapping(value="/test-pro-del",method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)  //saveLoc uri in action="/saveLoc" jsp
	@Transactional
	public  String delNames(@RequestParam(value="names",required=false) List<String> names){
		
		 userRepository.deleteByName(names);
		return "admin/test-pro";
	};
	
	//DELETE MULTIPLE SELECTED CHECKBOX
	@RequestMapping(value="/test-pro-ids",method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)  //saveLoc uri in action="/saveLoc" jsp
	@Transactional
	public  String delId2(@RequestParam(value="ids",required=false) List<String> ids){
		
		List<Long> selected=new LinkedList<Long>();
		ids.stream().forEach(e->selected.add(Long.valueOf(e)));
		System.out.println(selected);
		userRepository.deleteByIds(selected);
		
		 for (String data : ids) {
	            System.out.println("Your Data =>" + data);
	        }
		return "admin/test-pro";
	};
}
