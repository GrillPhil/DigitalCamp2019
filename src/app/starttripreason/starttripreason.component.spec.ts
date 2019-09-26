import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarttripreasonComponent } from './starttripreason.component';

describe('StarttripreasonComponent', () => {
  let component: StarttripreasonComponent;
  let fixture: ComponentFixture<StarttripreasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarttripreasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarttripreasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
