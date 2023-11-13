import { DatePipe, formatDate } from '@angular/common';
import { PlayersService } from './../services/players.service';
import { Component, OnInit } from '@angular/core';
import { WeekMatchUpsService } from '../services/week-match-ups.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  players: any;
  currentWeek = '';
  matchUps: any;
  season = '';

  constructor(
    private playersService: PlayersService,
    private weekMatchUpsService: WeekMatchUpsService
    ){}
  
  ngOnInit(){
      this.getCurrentNflWeek();
      this.getWeekMatchUps();
  }

  getCurrentNflWeek(){
    const today = new Date();
    const day = formatDate(today, 'MMdd', 'en-US');
    if(Number(day)>=1107 && Number(day)<=1113){
      this.currentWeek = '10'
    }
    else if(Number(day)>=1114 && Number(day)<=1120){
      this.currentWeek = '11'
    }
    else if(Number(day)>=1121 && Number(day)<=1127){
      this.currentWeek = '12'
    }
    else if(Number(day)>=1128 && Number(day)<=1204){
      this.currentWeek = '13'
    }
    else if(Number(day)>=1205 && Number(day)<=1211){
      this.currentWeek = '14'
    }
    else if(Number(day)>=1212 && Number(day)<=1218){
      this.currentWeek = '15'
    }
    else if(Number(day)>=1219 && Number(day)<=1225){
      this.currentWeek = '16'
    }
    else if(Number(day)>=1226 || Number(day)<=101){
      this.currentWeek = '17'
    }
    else if(Number(day)>=102 && Number(day)<=108){
      this.currentWeek = '18'
    }
    else if(Number(day)>=109 && Number(day)<=115){
      this.currentWeek = '19'
    }
    else if(Number(day)>=116 && Number(day)<=122){
      this.currentWeek = '20'
    }
    else if(Number(day)>=123 && Number(day)<=129){
      this.currentWeek = '21'
    }
    else if(Number(day)>=130 && Number(day)<=205){
      this.currentWeek = '22'
    }
    else if(Number(day)>=206 && Number(day)<=212){
      this.currentWeek = '23'
    }
    this.getSeason();
  }

  getSeason(){
    if(Number(this.currentWeek) <= 18){
      this.season = '2023REG'
    }
    else{
      this.season = '2023POST'
      this.currentWeek = (Number(this.currentWeek) - 18).toString();
    }
  }

  getWeekMatchUps(){
    this.weekMatchUpsService.getWeekMatchUps(this.currentWeek, this.season)
    .subscribe((data: any) => {
      this.matchUps = data;
      console.log(this.matchUps);
    })
  }

  changeWeek(backOrForward: string){
    if(backOrForward == 'back'){
      this.currentWeek = (Number(this.currentWeek) - 1).toString();
    }
    else{
      this.currentWeek = (Number(this.currentWeek) + 1).toString();;
    }
    this.getSeason();
    this.getWeekMatchUps();
  }

}
