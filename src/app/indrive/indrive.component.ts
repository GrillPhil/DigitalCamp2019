import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle.model';
import { DriveService } from '../drive.service';
import { Router } from '@angular/router';

declare var ol: any;

@Component({
  selector: 'app-indrive',
  templateUrl: './indrive.component.html',
  styleUrls: ['./indrive.component.scss']
})
export class IndriveComponent implements OnInit {

  constructor(private driveService: DriveService,
              private router: Router) { }

  map: any;
  elapsedTimeInSeconds: number;
  distance: number;
  driver: string;
  vehicle: Vehicle;

  ngOnInit() {

    this.elapsedTimeInSeconds = 0;
    this.distance = 0;

    let currentDrive = this.driveService.get();

    this.driver = currentDrive.driver;
    this.vehicle = currentDrive.vehicle;
    
    this.simulate();

    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([currentDrive.startLocation.lon, 
                                    currentDrive.startLocation.lat]),
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

  end() {
    this.driveService.updateDistance(this.distance);
    this.driveService.updateEnd(new Date());
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.driveService.updateEndLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
        this.router.navigate(['endtrip']);
      });
    }    
  }
}
