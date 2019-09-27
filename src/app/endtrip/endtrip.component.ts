import { Component, OnInit } from '@angular/core';
import { DriveService } from '../drive.service';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-endtrip',
  templateUrl: './endtrip.component.html',
  styleUrls: ['./endtrip.component.scss']
})
export class EndtripComponent implements OnInit {

  endMileage = new FormControl('');
  reason = new FormControl('');
  reasons: string[];

  constructor(private driveService: DriveService,
              private dataService: DataService) { }

  ngOnInit() {
    this.reasons = this.dataService.getReasons();
    let currentDrive = this.driveService.get();
    this.endMileage.setValue(currentDrive.endMileage);
    this.reason.setValue(currentDrive.reason);
  }

  save() {
    this.driveService.updateReason(this.reason.value);
    this.driveService.updateEndMileage(this.endMileage.value);

    console.log('Final Drive');
    console.log(this.driveService.get());
  }
}
