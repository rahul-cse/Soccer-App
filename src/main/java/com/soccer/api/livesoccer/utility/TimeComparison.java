package com.soccer.api.livesoccer.utility;

import java.util.Date;

public class TimeComparison {

	public boolean lessEightHour(Date d1, Date d2) {
		
		Long diff = (d2.getTime() - d1.getTime())/(1000 * 60 * 60);
		if(diff<=8)
			return true;
		else
			return false;
	}
	
	public boolean greaterEightHour(Date d1, Date d2) {		
		Long diff = (d2.getTime() - d1.getTime())/(1000 * 60 * 60);
		if(diff>8)
			return true;
		else
			return false;
	}
}
