import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Vehicle } from '../vehicle.model';
import { DataService } from '../data.service';
import { GeocodeService } from '../geocode.service';
import { DriveService } from '../drive.service';
import { Drive } from '../drive.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starttrip',
  templateUrl: './starttrip.component.html',
  styleUrls: ['./starttrip.component.scss']
})
export class StarttripComponent implements OnInit {

  driver = new FormControl('');
  start = new FormControl('');
  startLocation = new FormControl('');
  vehicle = new FormControl('');
  startMileage = new FormControl('');

  vehicles: Vehicle[];

  private _newDrive: Drive;

  constructor(private dataService: DataService, 
              private geocodeService: GeocodeService, 
              private driveService: DriveService,
              private router: Router) { }

  ngOnInit() {

    this._newDrive = {
      distance: 0,
      driver: 'Philipp',
      end: null,
      endLocation: null,
      endMileage: null,
      id: null,
      reason: null,
      start: new Date(),
      startLocation: null,
      startMileage: null,
      vehicle: null
    };

    this.driver.setValue(this._newDrive.driver);
    this.start.setValue(this._newDrive.start);
    this.vehicles = this.dataService.getVehicles();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this._newDrive.startLocation = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        };
        this.geocodeService.getAddressFromCoordinate(position.coords.latitude, position.coords.longitude).subscribe(result => {
          this.startLocation.setValue(result.Response.View["0"].Result["0"].Location.Address.Label);
        });
      });
    }
  }

  next() {
    this._newDrive.driver = this.driver.value;
    this._newDrive.start = this.start.value;
    this._newDrive.vehicle = this.vehicle.value;

    if (this._newDrive.vehicle) {
      this._newDrive.startMileage = this._newDrive.vehicle.mileage;
    }

    this.driveService.create(this._newDrive);
    this.router.navigate(['starttripreason']);
  }
}
