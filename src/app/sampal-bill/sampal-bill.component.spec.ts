import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampalBillComponent } from './sampal-bill.component';

describe('SampalBillComponent', () => {
  let component: SampalBillComponent;
  let fixture: ComponentFixture<SampalBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampalBillComponent,SampalBillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampalBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
