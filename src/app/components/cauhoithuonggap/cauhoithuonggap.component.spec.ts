import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauhoithuonggapComponent } from './cauhoithuonggap.component';

describe('CauhoithuonggapComponent', () => {
  let component: CauhoithuonggapComponent;
  let fixture: ComponentFixture<CauhoithuonggapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CauhoithuonggapComponent]
    });
    fixture = TestBed.createComponent(CauhoithuonggapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
