import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BettingComponent } from './betting/betting.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { ScoresComponent } from './scores/scores.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamStatsComponent } from './team-stats/team-stats.component';
import { NgChartsModule } from 'ng2-charts';
import { TeamInfoService } from './services/team-info.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ScoresComponent,
    NavbarComponent,
    FantasyComponent,
    BettingComponent,
    TeamStatsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule,
    MatTooltipModule,
    NgChartsModule,
    MatTabsModule,
    MatProgressBarModule,
    MatSelectModule
  ],
  providers: [TeamInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
