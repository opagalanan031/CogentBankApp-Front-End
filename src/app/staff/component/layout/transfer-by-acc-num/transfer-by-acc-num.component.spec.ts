import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferByAccNumComponent } from './transfer-by-acc-num.component';

describe('TransferByAccNumComponent', () => {
  let component: TransferByAccNumComponent;
  let fixture: ComponentFixture<TransferByAccNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferByAccNumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferByAccNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
