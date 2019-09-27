import { Location } from './location.model';
import { Vehicle } from './vehicle.model';

export class Drive {
    id: string;
    start: Date;
    end: Date;
    distance: number;
    driver: string;
    reason: string;
    startLocation: Location;
    endLocation: Location;
    vehicle: Vehicle;
    startMileage: number;
    endMileage: number;
}