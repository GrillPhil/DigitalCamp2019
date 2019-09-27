import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {

  @Output() closed = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closed.emit(false);
  }

}
