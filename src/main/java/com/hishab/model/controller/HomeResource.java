package com.hishab.model.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeResource {
	@RequestMapping(value="/",method=RequestMethod.GET)
	public String home(Model model) {
		return "common-script";
	};
	
	@RequestMapping(value = "/admin", method = RequestMethod.GET)
	public String showLogin(Model model) {
		return "admin/admin-dashboard";
	};

}
