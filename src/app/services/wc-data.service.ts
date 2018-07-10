import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team, Group } from 'src/app/models/teams.model';

@Injectable({
  providedIn: 'root'
})
export class WcDataService {
  API_URL = 'https://worldcup.sfg.io';

  constructor(private http: HttpClient) { }

  getGroups() {
    return this.http.get<Group[]>(`${this.API_URL}/teams/group_results`);
  }

  getTeams() {
    return this.http.get<Team[]>(`${this.API_URL}/teams`);
  }

}
