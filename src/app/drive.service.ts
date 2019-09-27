import { Injectable } from '@angular/core';
import { Drive } from './drive.model';
import { Location } from './location.model';

@Injectable({
  providedIn: 'root'
})
export class DriveService {

  private _currentDrive: Drive

  constructor() { }

  create(drive: Drive) {
    this._currentDrive = drive;
  }

  get() {
    return this._currentDrive;
  }

  updateReason(reason: string) {
    this._currentDrive.reason = reason;
    console.log(this._currentDrive);
  }

  updateDistance(distance: number) {
    this._currentDrive.distance = distance;
    this._currentDrive.endMileage = this._currentDrive.startMileage + distance;
  }

  updateEnd(date: Date) {
    this._currentDrive.end = date;
  }

  updateEndLocation(location: Location) {
    this._currentDrive.endLocation = location;
  }

  updateEndMileage(mileage: any) {
    this._currentDrive.endMileage = mileage;
  }
}
