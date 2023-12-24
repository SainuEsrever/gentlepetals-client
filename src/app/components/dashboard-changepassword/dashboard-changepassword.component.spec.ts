import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChangepasswordComponent } from './dashboard-changepassword.component';

describe('DashboardChangepasswordComponent', () => {
  let component: DashboardChangepasswordComponent;
  let fixture: ComponentFixture<DashboardChangepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardChangepasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardChangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
