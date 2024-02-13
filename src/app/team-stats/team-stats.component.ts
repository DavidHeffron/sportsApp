import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { TeamStatsService } from './../services/team-stats.service';
import { TeamNameService } from '../services/team-name.service';

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

  constructor(private teamStatService: TeamStatsService, private route: ActivatedRoute, private teamNameService: TeamNameService){}

  ngOnInit(){
    this.team = this.route.snapshot.paramMap.get('teamName')?.toUpperCase();
    this.getSeasonStats();
  }

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
      this.teamName = this.teamNameService.getTeamName(this.seasonStats[0].Team)
      console.log(this.teamName)
    })
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

}
