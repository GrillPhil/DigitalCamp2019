import { Location } from './location.model';

export class Drive {
    id: string;
    start: Date;
    end: Date;
    licensePlate: string;
    vehicleDescription: string;
    distance: number;
    driver: string;
    reason: string;
    startLocation: Location;
    endLocation: Location;
    startMileage: number;
    endMileage: number;
}