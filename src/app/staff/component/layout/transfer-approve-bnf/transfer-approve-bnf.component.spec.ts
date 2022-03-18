import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferApproveBnfComponent } from './transfer-approve-bnf.component';

describe('TransferApproveBnfComponent', () => {
  let component: TransferApproveBnfComponent;
  let fixture: ComponentFixture<TransferApproveBnfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferApproveBnfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferApproveBnfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
