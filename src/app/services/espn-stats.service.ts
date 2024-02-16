import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EspnStatsService {

  endpoint_url = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/'

  constructor(private http: HttpClient) { }

  public getEspnTeamStats(teamId: string){
    return this.http.get(this.endpoint_url + teamId); 
  }
}
