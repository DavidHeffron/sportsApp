import { Injectable } from "@angular/core";

@Injectable()
export class TeamInfoService {

    getTeamName(teamInitials: string): string{
        switch (teamInitials){
            case 'ARI':
                return 'Arizona Cardinals';
            case 'BAL':
                return 'Baltimore Ravens';
            case 'ATL':
                return 'Atlanta Falcons';
            case 'BUF':
                return 'Buffalo Bills';
            case 'CAR':
                return 'Carolina Panthers';
            case 'CIN':
                return 'Cincinnati Bengals';
            case 'CHI':
                return 'Chicago Bears';
            case 'CLE':
                return 'Cleveland Browns';
            case 'DAL':
                return 'Dallas Cowboys';
            case 'DEN':
                return 'Denver Broncos';
            case 'DET':
                return 'Detroit Lions';
            case 'HOU':
                return 'Houston Texans';
            case 'GB':
                return 'Green Bay Packers';
            case 'IND':
                return 'Indianapolis Colts';
            case 'LAR':
                return 'Los Angeles Rams';
            case 'JAX':
                return 'Jacksonville Jaguars';
            case 'MIN':
                return 'Minnesota Vikings';
            case 'KC':
                return 'Kansas City Cheifs';
            case 'NO':
                return 'New Orleans Saints';
            case 'LV':
                return 'Las Vegas Raiders';
            case 'NYG':
                return 'New York Giants';
            case 'LAC':
                return 'Los Angeles Chargers';
            case 'PHI':
                return 'Philadelphia Eagles';
            case 'MIA':
                return 'Miami Dolphins';
            case 'SF':
                return 'San Francisco 49ers';
            case 'NE':
                return 'New England Patriots';
            case 'SEA':
                return 'Seattle Seahawks';
            case 'NYJ':
                return 'New York Jets';
            case 'TB':
                return 'Tampa Bay Buccaneers';
            case 'PIT':
                return 'Pittsburgh Steelers';
            case 'WAS':
                return 'Washington Commanders';
            case 'TEN':
                return 'Tennessee Titans';
            default:
                return 'Error';
        }
    }

    //I decided to incorporate espn endpoint so I needed to map the team initials to the ids that correspond with espns data
    getTeamId(teamInitials: string): string{
        switch (teamInitials){
            case 'ARI':
                return '22';
            case 'BAL':
                return '33';
            case 'ATL':
                return '1';
            case 'BUF':
                return '2';
            case 'CAR':
                return '29';
            case 'CIN':
                return '4';
            case 'CHI':
                return '3';
            case 'CLE':
                return '5';
            case 'DAL':
                return '6';
            case 'DEN':
                return '7';
            case 'DET':
                return '8';
            case 'HOU':
                return '34';
            case 'GB':
                return '9';
            case 'IND':
                return '11';
            case 'LAR':
                return '14';
            case 'JAX':
                return '30';
            case 'MIN':
                return '16';
            case 'KC':
                return '12';
            case 'NO':
                return '18';
            case 'LV':
                return '13';
            case 'NYG':
                return '19';
            case 'LAC':
                return '24';
            case 'PHI':
                return '21';
            case 'MIA':
                return '15';
            case 'SF':
                return '25';
            case 'NE':
                return '17';
            case 'SEA':
                return '26';
            case 'NYJ':
                return '20';
            case 'TB':
                return '27';
            case 'PIT':
                return '23';
            case 'WAS':
                return '28';
            case 'TEN':
                return '10';
            default:
                return 'Error';
        }
    }
}