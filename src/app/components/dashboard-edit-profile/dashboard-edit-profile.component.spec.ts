import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEditProfileComponent } from './dashboard-edit-profile.component';

describe('DashboardEditProfileComponent', () => {
  let component: DashboardEditProfileComponent;
  let fixture: ComponentFixture<DashboardEditProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardEditProfileComponent]
    });
    fixture = TestBed.createComponent(DashboardEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
