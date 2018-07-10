import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/teams.model';
import { WcDataService } from 'src/app/services/wc-data.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams: Team[];

  constructor(private wcDataService: WcDataService) {
  }

  ngOnInit() {
    this.fetchTeams();
  }

  fetchTeams() {
    this.wcDataService.getTeams()
      .subscribe((data: Team[]) => this.teams = data);
  }

}
