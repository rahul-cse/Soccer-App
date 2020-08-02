package com.soccer.api.livesoccer.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.soccer.api.livesoccer.model.ApiResult;
import com.soccer.api.livesoccer.model.LiveScore;
import com.soccer.api.livesoccer.model.Standings;

@Service
public class SoccerApiService {
	
	String liveLink 	 = "https://www.scorebat.com/api/feed";
	String infoLink		 = "https://www.scorebat.com/api/assets/";
	String standingsLink = "https://www.scorebat.com/api/competition/3/";
	String videoLink	 = "https://www.scorebat.com/video-api/v1/";
	
	public ApiResult[] getVideoResult() {
		RestTemplate restTemplate = new RestTemplate();
		ApiResult[] responseObject = restTemplate.getForObject(videoLink,ApiResult[].class);
		return responseObject;
	}
	
	
	public List<LiveScore> getLiveScore() {
		RestTemplate restTemplate = new RestTemplate();
		List<LiveScore> liveScoreList = new ArrayList<LiveScore>();
		HashMap<String,Object> obj= (HashMap<String, Object>) restTemplate.getForEntity(liveLink, Object.class).getBody();
		Integer currentTime = (Integer) obj.get("currentTime");
		HashMap<String,Object> liveFeedMap =  (HashMap<String, Object>) obj.get("response");
		List<HashMap<String,?>> liveScoreMapList = (List<HashMap<String, ?>>) liveFeedMap.get("g");
		for(HashMap<String, ?> liveScoreMap: liveScoreMapList ) {
			LiveScore liveScore = new LiveScore();
			liveScore.setId((Integer) liveScoreMap.get("id"));
			liveScore.setS1((String) liveScoreMap.get("s1"));
			liveScore.setS2((String) liveScoreMap.get("s2"));
			liveScore.setSc1((Integer) liveScoreMap.get("sc1"));
			liveScore.setSc2((Integer) liveScoreMap.get("sc2"));
			liveScore.setS((String) liveScoreMap.get("s"));
			Integer time=0;
			if(liveScoreMap.get("wh")!=null)
				time = (currentTime-(Integer)liveScoreMap.get("wh"))/60;liveScore.setTime(time);
			
			liveScoreList.add(liveScore);
		}
		return liveScoreList;
	}
	
	
	public List<Standings> getStandings(String leagueName){
		RestTemplate restTemplate = new RestTemplate();
		HashMap<String,Object> obj = (HashMap<String, Object>) restTemplate.getForEntity(standingsLink+leagueName, Object.class).getBody();
		HashMap<String,Object> responseMap =  (HashMap<String, Object>) obj.get("response");
		HashMap<String,?> standingsMap =  (HashMap<String, ?>) responseMap.get("standings");
		List<Standings> standingsList = new ArrayList<Standings>();
		for(Map.Entry entry: standingsMap.entrySet()) {
			if(entry.getKey().equals("rows"))
				standingsList = (List<Standings>) entry.getValue();
		}
		return standingsList;
	}

}
