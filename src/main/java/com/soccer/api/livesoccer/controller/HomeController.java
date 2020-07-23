package com.soccer.api.livesoccer.controller;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.soccer.api.livesoccer.model.ApiResult;



@RestController
@RequestMapping("/soccerApp")
public class HomeController {

	
	@GetMapping("/home")
	public List<ApiResult> home()  {
		
		RestTemplate restTemplate = new RestTemplate();
		ApiResult[] responseObject = restTemplate.getForObject("https://www.scorebat.com/video-api/v1/",ApiResult[].class);
				System.out.println(responseObject);
		List<ApiResult> apiResultList = new ArrayList<ApiResult>();
		for(ApiResult apiResult: responseObject) {
			System.out.println(apiResult.getSide1().getName()+" vs "+ apiResult.getSide2().getName());
			if(compareEightHour(apiResult.getDate())) {
				apiResultList.add(apiResult);
			}
		}
				
				
		return apiResultList;
	}
	
	public boolean compareEightHour(Date d) {
		Date date = new Date();
		Long diff = (date.getTime() - d.getTime())/(1000 * 60 * 60);
		if(diff<=8)
			return true;
		else
			return false;
	}
}
