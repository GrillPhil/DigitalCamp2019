import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Drive } from '../drive.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  recentDrives: Drive[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.recentDrives = this.dataService.getRecentDrives();
  }

}
