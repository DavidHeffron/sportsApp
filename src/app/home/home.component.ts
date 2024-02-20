import { TeamInfoService } from './../services/team-info.service';
import { formatDate } from '@angular/common';
import { TeamStatsService } from './../services/team-stats.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  teamsInfo: any;
  currentYear!: string;

  constructor(private teamStatsService: TeamStatsService, public teamInfoService: TeamInfoService){}

  ngOnInit(){
    this.getCurrentYear();
    this.getTeams();
  }

  getTeams(){
    this.teamStatsService.getTeamSeasonStats(`${this.currentYear}REG`).subscribe(items => {
      this.teamsInfo = items;
    })
  }

  getCurrentYear(){
    const today = new Date();
    let currentWeek = formatDate(today, 'w', 'en-US');
    this.currentYear = formatDate(today, 'YYYY', 'en-US');
    if (Number(currentWeek) < 36){
      this.currentYear = (Number(this.currentYear) - 1).toString();
    }
  }

}
