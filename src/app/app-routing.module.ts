import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoresComponent } from './scores/scores.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { BettingComponent } from './betting/betting.component';
import { TeamStatsComponent } from './team-stats/team-stats.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'scores', component: ScoresComponent },
  { path: 'fantasy', component: FantasyComponent },
  { path: 'betting', component: BettingComponent },
  { path: 'team-stats/:teamName', component: TeamStatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
