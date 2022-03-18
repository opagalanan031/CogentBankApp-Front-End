import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableStaffComponent } from './enable-staff.component';

describe('EnableStaffComponent', () => {
  let component: EnableStaffComponent;
  let fixture: ComponentFixture<EnableStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnableStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnableStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
