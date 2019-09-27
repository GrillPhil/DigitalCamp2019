import { Injectable } from '@angular/core';
import { Location } from './location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  currentLocation: Location = {
    lat: 48.8899822,
    lon: 8.6971902
  };

  constructor() { }
}
