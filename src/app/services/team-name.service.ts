import { Injectable } from "@angular/core";

@Injectable()
export class TeamNameService {

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
                return 'Carolina Panthers Ravens';
            case 'CIN':
                return 'Cincinnati Bengals ';
            case 'CHI':
                return 'Chicago Bears';
            case 'CLE':
                return 'Cleveland Bears';
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
}