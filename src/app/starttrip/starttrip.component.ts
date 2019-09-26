import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Vehicle } from '../vehicle.model';
import { DataService } from '../data.service';

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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.driver.setValue("Philipp");
    this.start.setValue(new Date());
    this.vehicles = this.dataService.getVehicles();
  }

}
