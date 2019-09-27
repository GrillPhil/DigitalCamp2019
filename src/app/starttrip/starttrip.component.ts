import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Vehicle } from '../vehicle.model';
import { DataService } from '../data.service';
import { GeocodeService } from '../geocode.service';
import { LocationService } from '../location.service';

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

  constructor(private dataService: DataService, 
              private geocodeService: GeocodeService, 
              private locationService: LocationService) { }

  ngOnInit() {
    this.driver.setValue("Philipp");
    this.start.setValue(new Date());
    this.vehicles = this.dataService.getVehicles();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.locationService.currentLocation = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        };
        this.geocodeService.getAddressFromCoordinate(position.coords.latitude, position.coords.longitude).subscribe(result => {
          this.startLocation.setValue(result.Response.View["0"].Result["0"].Location.Address.Label);
        });
      });
    }
  }
}
