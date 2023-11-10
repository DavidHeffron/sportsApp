import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeekMatchUpsService {

  constructor(private http: HttpClient) { }

  public getWeekMatchUps(week: string, season: string) { 
    return this.http.get(`https://api.sportsdata.io/api/nfl/odds/json/ScoresByWeek/${season}/${week}?key=edf6461bfc074130a3c549e7497b2fbf`); 
  } 

}
