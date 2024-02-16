import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { TeamStatsService } from './../services/team-stats.service';
import { TeamInfoService } from '../services/team-info.service';
import { EspnStatsService } from '../services/espn-stats.service';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.css']
})
export class TeamStatsComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  seasonStats: any;
  currentYear!: string;
  team: any;
  //Created a team name service and variable that will map the team initials that the api gives us to the full team name since the api doesn't provide the full team name
  teamName = '';
  teamId = '';
  teamRecord = '';
  espnStats: any;

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  totalYardsValue = 0;
  passYPG = 0;
  rushYPG = 0;
  //Highest buffer value is 100, so we assume around 4000 yards is highest for progress bar, divide by 4 to get value of 100 and then divide each teams yards per game by 4
  //to get proper progress bar stats
  totalYardsBufferValue = 100;
  passBufferValue = 65;
  rushBufferValue = 100;

  constructor(private teamStatService: TeamStatsService, private route: ActivatedRoute, private teamInfoService: TeamInfoService, private espnService: EspnStatsService){}

  ngOnInit(){
    this.team = this.route.snapshot.paramMap.get('teamName')?.toUpperCase();
    //this.getCurretYear();
    this.getSeasonStats();
  }
  //get current year for initial load, user can later change year to see different years stats
  //getCurrentYear();
  //remember endpoint
 // https://site.api.espn.com/apis/site/v2/sports/football/nfl/seasons/2017/teams/21
  getSeasonStats(){
    const today = new Date();
    let currentWeek = formatDate(today, 'w', 'en-US');
    this.currentYear = formatDate(today, 'YYYY', 'en-US');
    if (Number(currentWeek) < 36){
      this.currentYear = (Number(this.currentYear) - 1).toString();
    }

    this.teamStatService.getTeamSeasonStats(`${this.currentYear}REG`).subscribe((data: any) => {
      this.seasonStats = data.filter((item: any) => item.Team == this.team)
      this.updateChartData(this.seasonStats[0]);
      this.updateRadarChart(this.seasonStats[0]);
      this.teamName = this.teamInfoService.getTeamName(this.seasonStats[0].Team);
      this.teamId = this.teamInfoService.getTeamId(this.seasonStats[0].Team);
      this.getEspnStats(this.teamId);
    })
  }

  getEspnStats(teamId: string){
    this.espnService.getEspnTeamStats(teamId).subscribe((data:any) => {
      this.teamRecord = data.team.record.items[0].summary;
      this.espnStats = data;
    });
  }

  public barChartOptions: ChartConfiguration['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0,
        max: 8000
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    labels: ['Passing Yards', 'Rushing Yards', 'Total Yards'],
    datasets: [
      { data: [], label: 'Offense', backgroundColor: 'rgb(79, 76, 82, 0.7)', barPercentage: 0.5, borderColor: 'black', borderWidth: 1, borderRadius: {topLeft: 10, topRight: 10}},
      { data: [], label: 'Defense', backgroundColor: 'rgb(196, 49, 49, 0.7)', barPercentage: 0.5, borderColor: 'black', borderWidth: 1, borderRadius: {topLeft: 10, topRight: 10}},
    ],
  };

  updateChartData(stats: any){
    this.barChartData.datasets[0].data.push(stats.PassingYards)
    this.barChartData.datasets[0].data.push(stats.RushingYards)
    this.barChartData.datasets[0].data.push(stats.OffensiveYards)
    this.barChartData.datasets[1].data.push(stats.OpponentPassingYards)
    this.barChartData.datasets[1].data.push(stats.OpponentRushingYards)
    this.barChartData.datasets[1].data.push(stats.OpponentOffensiveYards)
    this.chart?.update();
  }

    // events
    public chartClicked({
      event,
      active,
    }: {
      event?: ChartEvent;
      active?: object[];
    }): void {
      console.log(event, active);
    }
  
    public chartHovered({
      event,
      active,
    }: {
      event?: ChartEvent;
      active?: object[];
    }): void {
    }

  //ng2 charts - firstdowns by pass, rush, flag - pie chart
  //offense pass/rush yards, defesne pass/rush yards + add penalty yards - bar chart

  //radar chart code below
  public radarChartOptions: ChartConfiguration['options'] = {};
  public radarChartLabels: string[] = [
    'Completion %',
    'Third Down %',
    'Fourth Down %',
    'Red Zone %',
  ];
  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [], label: 'Offense', backgroundColor: 'rgb(59, 161, 21, 0.3)',
      borderColor: 'rgb(59, 161, 21)', pointBorderColor: 'white',
      pointBackgroundColor: 'rgb(59, 161, 21)' },
      { data: [], label: 'Defense Allowed', backgroundColor: 'rgb(171, 27, 27, 0.3)',
      borderColor: 'rgb(171, 27, 27)', pointBorderColor: 'white',
      pointBackgroundColor: 'rgb(171, 27, 27)' },
    ],
  };
  public radarChartType: ChartType = 'radar';
  
  updateRadarChart(stats: any){
    this.radarChartData.datasets[0].data.push(stats.CompletionPercentage);
    this.radarChartData.datasets[0].data.push(stats.ThirdDownPercentage);
    this.radarChartData.datasets[0].data.push(stats.FourthDownPercentage);
    this.radarChartData.datasets[0].data.push(stats.RedZonePercentage);

    this.radarChartData.datasets[1].data.push(stats.OpponentCompletionPercentage);
    this.radarChartData.datasets[1].data.push(stats.OpponentThirdDownPercentage);
    this.radarChartData.datasets[1].data.push(stats.OpponentFourthDownPercentage);
    this.radarChartData.datasets[1].data.push(stats.OpponentRedZonePercentage);

  }

}
