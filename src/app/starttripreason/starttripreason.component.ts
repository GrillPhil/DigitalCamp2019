import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DriveService } from '../drive.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starttripreason',
  templateUrl: './starttripreason.component.html',
  styleUrls: ['./starttripreason.component.scss']
})
export class StarttripreasonComponent implements OnInit {

  reasons: string[];
  selection: number;

  constructor(private dataService: DataService,
              private driveService: DriveService,
              private router: Router) { }

  ngOnInit() {
    this.reasons = this.dataService.getReasons();
  }

  next() {
    this.driveService.updateReason(this.reasons[this.selection]);
    this.router.navigate(['indrive']);
  }
}
