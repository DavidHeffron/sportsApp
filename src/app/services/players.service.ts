import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 


@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient ) { }

  public getPlayers() { 
    return this.http.get('https://api.sportsdata.io/api/nfl/fantasy/json/Players?key=edf6461bfc074130a3c549e7497b2fbf'); 
  } 

}
