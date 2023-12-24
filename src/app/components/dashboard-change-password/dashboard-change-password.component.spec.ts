import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChangePasswordComponent } from './dashboard-change-password.component';

describe('DashboardChangePasswordComponent', () => {
  let component: DashboardChangePasswordComponent;
  let fixture: ComponentFixture<DashboardChangePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardChangePasswordComponent]
    });
    fixture = TestBed.createComponent(DashboardChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
