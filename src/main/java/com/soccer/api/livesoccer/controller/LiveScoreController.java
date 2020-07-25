package com.soccer.api.livesoccer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.soccer.api.livesoccer.model.LiveScore;
import com.soccer.api.livesoccer.service.SoccerApiService;

@RestController
@RequestMapping("/soccerApp")
@CrossOrigin("*")
public class LiveScoreController {

	@Autowired
	SoccerApiService soccerService;
	
	@GetMapping("/live")
	public ResponseEntity<?> getLiveScore() {
		List<LiveScore> liveScoreList = soccerService.getLiveScore();
		return ResponseEntity.ok().body(liveScoreList);
	}
}
