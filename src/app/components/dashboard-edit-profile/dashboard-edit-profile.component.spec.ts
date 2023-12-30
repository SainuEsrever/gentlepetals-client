import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEditProfileComponent } from './dashboard-edit-profile.component';

describe('DashboardEditProfileComponent', () => {
  let component: DashboardEditProfileComponent;
  let fixture: ComponentFixture<DashboardEditProfileComponent>;

<<<<<<< HEAD
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardEditProfileComponent]
    })
    .compileComponents();
    
=======
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardEditProfileComponent]
    });
>>>>>>> d761ffbe5cf52aea9cb997ed7fa5f76368474c57
    fixture = TestBed.createComponent(DashboardEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
