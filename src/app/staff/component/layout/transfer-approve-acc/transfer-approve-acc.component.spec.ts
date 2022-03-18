import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferApproveAccComponent } from './transfer-approve-acc.component';

describe('TransferApproveAccComponent', () => {
  let component: TransferApproveAccComponent;
  let fixture: ComponentFixture<TransferApproveAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferApproveAccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferApproveAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
