import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanplusComponent } from './finanplus.component';

describe('FinanplusComponent', () => {
  let component: FinanplusComponent;
  let fixture: ComponentFixture<FinanplusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanplusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
