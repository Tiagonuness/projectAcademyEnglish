import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultNavbarLayoutComponent } from './default-navbar-layout.component';

describe('DefaultNavbarLayoutComponent', () => {
  let component: DefaultNavbarLayoutComponent;
  let fixture: ComponentFixture<DefaultNavbarLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultNavbarLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultNavbarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
