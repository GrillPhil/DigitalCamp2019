import { Injectable } from '@angular/core';
import { Drive } from './drive.model';
import { Location } from './location.model';
import { Vehicle } from './vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getReasons(): string[] {
    return [
      'Werkstattfahrt',
      'Schneeräumen',
      'Baustelle Anfahrt'
    ];
  }

  getVehicles(): Vehicle[] {
    return [
      {
        id: '1',
        name: 'Schneepflug',
        mileage: 45000,
        licensePlate: 'PF-SP 2019'
      },
      {
        id: '2',
        name: 'Sprinter',
        mileage: 23000,
        licensePlate: 'PF-SP 2018'
      },
      {
        id: '3',
        name: 'LKW 3,5 T',
        mileage: 99000,
        licensePlate: 'PF-SP 2017'
      },
    ];
  }
  
  getRecentDrives(): Drive[] {
    return [
      {
        id: 'test1',
        distance: 58,
        driver: 'Philipp',
        end: new Date(),
        endLocation: new Location(),
        endMileage: 99058,
        licensePlate: 'PF-SP 2019',
        reason: 'Werkstattfahrt',
        start: new Date(),
        startLocation: new Location(),
        startMileage: 99000,
        vehicleDescription: 'Sprinter'
      },
      {
        id: 'test2',
        distance: 58,
        driver: 'Philipp',
        end: new Date(),
        endLocation: new Location(),
        endMileage: 99058,
        licensePlate: 'PF-SP 2019',
        reason: 'Werkstattfahrt',
        start: new Date(),
        startLocation: new Location(),
        startMileage: 99000,
        vehicleDescription: 'Sprinter'
      },
      {
        id: 'test3',
        distance: 58,
        driver: 'Philipp',
        end: new Date(),
        endLocation: new Location(),
        endMileage: 99058,
        licensePlate: 'PF-SP 2019',
        reason: 'Werkstattfahrt',
        start: new Date(),
        startLocation: new Location(),
        startMileage: 99000,
        vehicleDescription: 'Sprinter'
      }
    ];
  }
}
