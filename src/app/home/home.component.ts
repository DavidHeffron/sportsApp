import { PlayersService } from './../services/players.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  players: any;

  constructor(private playersService: PlayersService){}
  
  ngOnInit(){
    console.log('hello')
    this.playersService.getPlayers()
      .subscribe((data: any) => {
        this.players = data;
        console.log(this.players);
      })
  }

}
