import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferBlockCustComponent } from './transfer-block-cust.component';

describe('TransferBlockCustComponent', () => {
  let component: TransferBlockCustComponent;
  let fixture: ComponentFixture<TransferBlockCustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferBlockCustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferBlockCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
