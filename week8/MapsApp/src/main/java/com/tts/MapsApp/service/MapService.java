package com.tts.MapsApp.service;

import com.tts.MapsApp.model.GeocodingResponse;
import com.tts.MapsApp.model.Location;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MapService implements MapsInterface {

	@Value("${api_key}")
	private String apiKey;

	@Override
	public void addCoordinates(Location location) {

		String url = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
				location.getCity() + "," + location.getState() + "&key=" + apiKey;

		RestTemplate restTemplate = new RestTemplate();
		GeocodingResponse response = restTemplate.getForObject(url, GeocodingResponse.class);
		Location coordinates = response.getResults().get(0).getGeometry().getLocation();

		location.setLat(coordinates.getLat());
		location.setLng(coordinates.getLng());
	}

}
