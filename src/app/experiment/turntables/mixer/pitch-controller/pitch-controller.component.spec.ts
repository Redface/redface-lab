import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchControllerComponent } from './pitch-controller.component';

describe('PitchControllerComponent', () => {
  let component: PitchControllerComponent;
  let fixture: ComponentFixture<PitchControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
