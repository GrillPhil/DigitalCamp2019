import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-starttripreason',
  templateUrl: './starttripreason.component.html',
  styleUrls: ['./starttripreason.component.scss']
})
export class StarttripreasonComponent implements OnInit {

  reasons: string[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.reasons = this.dataService.getReasons();
  }

}
