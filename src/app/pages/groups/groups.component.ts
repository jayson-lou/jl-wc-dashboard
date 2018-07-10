import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/teams.model';
import { WcDataService } from 'src/app/services/wc-data.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups: Group[];

  constructor(private wcDataService: WcDataService) {
  }

  ngOnInit() {
    this.fetchGroups();
  }

  fetchGroups() {
    this.wcDataService.getGroups()
      .subscribe((data: Group[]) => this.groups = data);
  }

}
