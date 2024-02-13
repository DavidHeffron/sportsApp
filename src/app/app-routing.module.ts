import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { BettingComponent } from './betting/betting.component';
import { TeamStatsComponent } from './team-stats/team-stats.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'fantasy', component: FantasyComponent },
  { path: 'betting', component: BettingComponent },
  { path: 'team-stats/:teamName', component: TeamStatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
