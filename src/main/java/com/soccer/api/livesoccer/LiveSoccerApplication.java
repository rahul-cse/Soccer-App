package com.soccer.api.livesoccer;

import java.util.TimeZone;

import javax.annotation.PostConstruct;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LiveSoccerApplication {

	public static void main(String[] args) {
		SpringApplication.run(LiveSoccerApplication.class, args);
	}

	@PostConstruct
	void started() {
	    TimeZone.setDefault(TimeZone.getTimeZone("Etc/UTC"));
	}
}
