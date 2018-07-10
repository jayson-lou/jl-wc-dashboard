export interface Team {
  id: number;
  country: string;
  alternate_name: string;
  fifa_code: string;
  group_id: number;
  group_letter: string;
}

export interface GroupTeam {
  id: number;
  country: string;
  alternate_name: string;
  fifa_code: string;
  group_id: number;
  group_letter: string;
  wins: number;
  draws: number;
  losses: number;
  games_played: number;
  points: number;
  goals_for: number;
  goals_against: number;
  goal_differential: number;
}

export interface Group {
  id: number;
  letter: string;
  ordered_teams: GroupTeam[];
}
