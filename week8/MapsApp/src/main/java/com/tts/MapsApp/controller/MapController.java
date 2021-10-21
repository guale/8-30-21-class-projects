package com.tts.MapsApp.controller;

import com.tts.MapsApp.model.Location;
import com.tts.MapsApp.service.MapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MapController {

	@Autowired
	MapService mapService;

	@GetMapping("/")
	public String getDefaultMap(Model model) {
		model.addAttribute(new Location());

//		Location location = new Location();
//		location.setCity("Dallas");
//		location.setState("Texas");
//		mapService.addCoordinates(location);
//		System.out.println(location);

		return "index";
	}

	@PostMapping("/")
	public String getMapForLocation(Location location, Model model){
		mapService.addCoordinates(location);
		model.addAttribute(location);
		System.out.println(location);
		return "index";
	}

}
