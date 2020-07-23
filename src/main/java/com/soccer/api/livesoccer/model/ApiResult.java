package com.soccer.api.livesoccer.model;

import java.util.Date;
import java.util.List;

public class ApiResult {

	private String title;
	private String embed;
	private Date date;
	private Competition competetion;
	private Team side1;
	private Team side2;
	private List<ApiResult> videos;
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getEmbed() {
		return embed;
	}
	public void setEmbed(String embed) {
		this.embed = embed;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public Team getSide1() {
		return side1;
	}
	public void setSide1(Team side1) {
		this.side1 = side1;
	}
	public Team getSide2() {
		return side2;
	}
	public void setSide2(Team side2) {
		this.side2 = side2;
	}
	public Competition getCompetetion() {
		return competetion;
	}
	public void setCompetetion(Competition competetion) {
		this.competetion = competetion;
	}
	public List<ApiResult> getVideos() {
		return videos;
	}
	public void setVideos(List<ApiResult> videos) {
		this.videos = videos;
	}
	
	
	
}
