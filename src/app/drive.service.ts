import { Injectable } from '@angular/core';
import { Drive } from './drive.model';

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
  }

  updateDistance(distance: number) {
    this._currentDrive.distance = distance;
  }

  updateEnd(date: Date) {
    this._currentDrive.end = date;
  }

  updateEndMileage(mileage: number) {
    this._currentDrive.endMileage = this._currentDrive.startMileage + mileage;
  }
}
