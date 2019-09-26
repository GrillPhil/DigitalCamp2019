import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndriveComponent } from './indrive.component';

describe('IndriveComponent', () => {
  let component: IndriveComponent;
  let fixture: ComponentFixture<IndriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
