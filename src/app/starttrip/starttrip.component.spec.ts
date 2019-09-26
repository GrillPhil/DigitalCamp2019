import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarttripComponent } from './starttrip.component';

describe('StarttripComponent', () => {
  let component: StarttripComponent;
  let fixture: ComponentFixture<StarttripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarttripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarttripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
