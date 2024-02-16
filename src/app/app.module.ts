import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BettingComponent } from './betting/betting.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamStatsComponent } from './team-stats/team-stats.component';
import { NgChartsModule } from 'ng2-charts';
import { TeamInfoService } from './services/team-info.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FantasyComponent,
    BettingComponent,
    TeamStatsComponent,
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
  ],
  providers: [TeamInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
