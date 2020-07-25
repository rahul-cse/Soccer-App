package com.soccer.api.livesoccer.controller;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.soccer.api.livesoccer.model.ApiResult;
import com.soccer.api.livesoccer.service.SoccerApiService;
import com.soccer.api.livesoccer.utility.TimeComparison;



@RestController
@RequestMapping("/soccerApp")
@CrossOrigin("*")
public class HighlightsController {

	@Autowired
	SoccerApiService soccerApiService;
	
	@GetMapping("/highlights")
	public ResponseEntity<?> getVideoHighlights()  {
		
		ApiResult[] apiResultArray = soccerApiService.getVideoResult();
		List<ApiResult> apiResultList = new ArrayList<ApiResult>();
		TimeComparison timeComparison = new TimeComparison();
		Date date = new Date();
		
		for(ApiResult apiResult: apiResultArray) {
			System.out.println(apiResult.getSide1().getName()+" vs "+ apiResult.getSide2().getName());
			//if(timeComparison.lessEightHour(apiResult.getDate(),date)) {
				apiResultList.add(apiResult);
			//}
		}
				
				
		return ResponseEntity.ok().body(apiResultList);
		
	}
	

}
