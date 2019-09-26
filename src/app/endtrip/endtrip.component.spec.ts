import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndtripComponent } from './endtrip.component';

describe('EndtripComponent', () => {
  let component: EndtripComponent;
  let fixture: ComponentFixture<EndtripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndtripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndtripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
