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
  currentYear = '';
  currentNFLWeek = '';
  //regular, pre, or post season
  seasonType = '';
  matchUps: any;
  displaySeasonArr: string[] = ['Preseason', 'Regular Season', 'Wildcard', 'Divisional Round', 'Confrence Championship', 'Super Bowl'];
  displaySeasonIndex!: number;
  

  constructor(
    private playersService: PlayersService,
    private weekMatchUpsService: WeekMatchUpsService
    ){}
  
  ngOnInit(){
      this.getCurrentNflWeek();
      this.getWeekMatchUps();
  }

  getCurrentNflWeek(){
    //Checks for current week of the year and then sets the correct current NFL week. If we are in the offseason, the default week will be the most recent super bowl week.
    const today = new Date();
    const currentWeek = formatDate(today, 'w', 'en-US');
    this.currentYear = formatDate(today, 'YYYY', 'en-US');
    if(currentWeek == '7'){
      this.currentNFLWeek = '4';
      this.seasonType = 'POST';
      this.currentYear = (Number(this.currentYear) - 1).toString();
      this.displaySeasonIndex = 5;
    }
    else if(currentWeek == '6'){
      this.currentNFLWeek = '4';
      this.seasonType = 'POST';
      this.currentYear = (Number(this.currentYear) - 1).toString();
      this.displaySeasonIndex = 5;
      //probowl
    }
    else if(currentWeek == '5'){
      this.currentNFLWeek = '3';
      this.seasonType = 'POST';
      this.currentYear = (Number(this.currentYear) - 1).toString();
      this.displaySeasonIndex = 4;
    }
    else if(currentWeek == '4'){
      this.currentNFLWeek = '2';
      this.seasonType = 'POST';
      this.currentYear = (Number(this.currentYear) - 1).toString();
      this.displaySeasonIndex = 3;
    }
    else if(currentWeek == '3'){
      this.currentNFLWeek = '1';
      this.seasonType = 'POST';
      this.currentYear = (Number(this.currentYear) - 1).toString();
      this.displaySeasonIndex = 2;
    }
    else if(currentWeek == '2'){
      this.currentNFLWeek = '18';
      this.seasonType = 'REG';
      this.currentYear = (Number(this.currentYear) - 1).toString();
      this.displaySeasonIndex = 1;
    }
    else if(currentWeek == '1'){
      this.currentNFLWeek = '17';
      this.seasonType = 'REG';
      this.displaySeasonIndex = 1;
    }
    else if(currentWeek == '52'){
      this.currentNFLWeek = '16';
      this.seasonType = 'REG';
      this.displaySeasonIndex = 1;
    }
    else if(currentWeek == '51'){
      this.currentNFLWeek = '15';
      this.seasonType = 'REG';
      this.displaySeasonIndex = 1;
    }
    else if(currentWeek == '50'){
      this.currentNFLWeek = '14';
      this.seasonType = 'REG';
      this.displaySeasonIndex = 1;
    }
    else if(currentWeek == '49'){
      this.currentNFLWeek = '13';
      this.seasonType = 'REG';
      this.displaySeasonIndex = 1;
    }
    else if(currentWeek == '48'){
      this.currentNFLWeek = '12';
      this.seasonType = 'REG';
      this.displaySeasonIndex = 1;
    }
    else if(currentWeek == '47'){
      this.currentNFLWeek = '11';
      this.seasonType = 'REG';
      this.displaySeasonIndex = 1;
    }
    else if(currentWeek == '46'){
      this.currentNFLWeek = '10';
      this.seasonType = 'REG';
      this.displaySeasonIndex = 1;
    }
    else if(currentWeek == '45'){
      this.currentNFLWeek = '9';
      this.seasonType = 'REG';
      this.displaySeasonIndex = 1;
    }
    else if(currentWeek == '8'){
      this.currentNFLWeek = '8';
      this.seasonType = 'REG';
      this.displaySeasonIndex = 1;
    }
    else if(currentWeek == '43'){
      this.currentNFLWeek = '7';
      this.seasonType = 'REG';
      this.displaySeasonIndex = 1;
    }
    else if(currentWeek == '42'){
      this.currentNFLWeek = '6';
      this.seasonType = 'REG';
      this.displaySeasonIndex = 1;
    }
    else if(currentWeek == '41'){
      this.currentNFLWeek = '5';
      this.seasonType = 'REG';
      this.displaySeasonIndex = 1;
    }
    else if(currentWeek == '40'){
      this.currentNFLWeek = '4';
      this.seasonType = 'REG';
      this.displaySeasonIndex = 1;
    }
    else if(currentWeek == '39'){
      this.currentNFLWeek = '3';
      this.seasonType = 'REG';
      this.displaySeasonIndex = 1;
    }
    else if(currentWeek == '38'){
      this.currentNFLWeek = '2';
      this.seasonType = 'REG';
      this.displaySeasonIndex = 1;
    }
    else if(currentWeek == '37'){
      this.currentNFLWeek = '1';
      this.seasonType = 'REG';
      this.displaySeasonIndex = 1;
    }
    else if(currentWeek == '36'){
      this.currentNFLWeek = '3';
      this.seasonType = 'PRE';
      this.displaySeasonIndex = 0;

    }
    else if(currentWeek == '35'){
      this.currentNFLWeek = '2';
      this.seasonType = 'PRE';
      this.displaySeasonIndex = 0;
    }
    else if(currentWeek == '34'){
      this.currentNFLWeek = '1';
      this.seasonType = 'PRE';
      this.displaySeasonIndex = 0;
    }
    else if(currentWeek == '33'){
      this.currentNFLWeek = '1';
      this.seasonType = 'PRE';
      this.displaySeasonIndex = 0;
    }
    else{
      this.currentNFLWeek = '4';
      this.seasonType = 'POST';
      this.currentYear = (Number(this.currentYear) - 1).toString();
      this.displaySeasonIndex = 5;
    }
  }


  getWeekMatchUps(){
    //Calls the api to get the information based on the nfl week and year
    this.weekMatchUpsService.getWeekMatchUps(this.currentNFLWeek, (this.seasonType + this.currentYear))
    .subscribe((data: any) => {
      this.matchUps = data;
    })
  }

  //Method to allow users to go back or forward a week and see the matchup info for that week
  changeWeek(backOrForward: string){
    //going one week back
    if(backOrForward == 'back'){
      
      if(this.seasonType == 'POST' && this.currentNFLWeek != '1'){
          this.displaySeasonIndex--;
          this.currentNFLWeek = (Number(this.currentNFLWeek) - 1).toString();
      } 
      else if(this.seasonType == 'POST' && this.currentNFLWeek == '1'){
        this.displaySeasonIndex--;
        this.currentNFLWeek = '18';
        this.seasonType = 'REG';
      }
      else if (this.seasonType == 'REG' && this.currentNFLWeek == '1'){
        this.displaySeasonIndex--;
        this.currentNFLWeek = '3';
        this.seasonType = 'PRE';
      }
      else if (this.seasonType == 'PRE' && this.currentNFLWeek == '1'){
        this.seasonType = 'POST';
        this.currentNFLWeek = '4';
        this.currentYear = (Number(this.currentYear) - 1).toString();
        this.displaySeasonIndex = 5;
      }
      else{
        this.currentNFLWeek = (Number(this.currentNFLWeek) - 1).toString();
      }
    }
    //Going a week forward
    else{
      if (this.seasonType == 'POST' && this.currentNFLWeek == '4'){
        this.currentNFLWeek = '1';
        this.seasonType = 'PRE';
        this.currentYear = (Number(this.currentYear) + 1).toString();
        this.displaySeasonIndex = 0;
      }
      else if(this.seasonType == 'POST' && this.currentNFLWeek != '4'){
        this.displaySeasonIndex++;
        this.currentNFLWeek = (Number(this.currentNFLWeek) + 1).toString();
      }
      else if (this.seasonType == 'REG' && this.currentNFLWeek == '18'){
        this.seasonType = 'POST';
        this.currentNFLWeek = '1';
        this.displaySeasonIndex++;
      }
      else if (this.seasonType == 'PRE' && this.currentNFLWeek == '3'){
        this.seasonType = "REG";
        this.currentNFLWeek = '1';
        this.displaySeasonIndex++;
      }
      else{
        this.currentNFLWeek = (Number(this.currentNFLWeek) + 1).toString();;
      }
    }
    this.getWeekMatchUps();
  }

}
