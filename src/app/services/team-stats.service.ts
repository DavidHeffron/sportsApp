import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamStatsService {

  constructor(private http: HttpClient) { }

  public getTeamSeasonStats(season: string) { 
    return this.http.get(`https://api.sportsdata.io/api/nfl/odds/json/TeamSeasonStats/${season}?key=edf6461bfc074130a3c549e7497b2fbf`); 
  } 
}
