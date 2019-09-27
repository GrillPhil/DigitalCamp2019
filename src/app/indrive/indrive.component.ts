import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { Vehicle } from '../vehicle.model';

declare var ol: any;

@Component({
  selector: 'app-indrive',
  templateUrl: './indrive.component.html',
  styleUrls: ['./indrive.component.scss']
})
export class IndriveComponent implements OnInit {

  constructor(private locationService: LocationService) { }

  map: any;
  elapsedTimeInSeconds: number;
  distance: number;
  driver: string;
  vehicle: Vehicle;

  ngOnInit() {

    this.elapsedTimeInSeconds = 0;
    this.distance = 0;
    this.driver = 'Philipp';
    this.vehicle = {
      id: '1',
      licensePlate: 'PF-SP 2019',
      mileage: 99000,
      name: 'Schneepflug'
    }
    
    this.simulate();

    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.locationService.currentLocation.lon, 
                                    this.locationService.currentLocation.lat]),
        zoom: 13
      })
    });
  }

  simulate() {
    setTimeout(()=> {
      this.elapsedTimeInSeconds = this.elapsedTimeInSeconds + 1;
      this.distance = this.distance + 0.011;
      this.simulate();
    }, 1000);
  }

}
