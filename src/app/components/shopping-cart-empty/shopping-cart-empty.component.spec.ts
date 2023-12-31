import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartEmptyComponent } from './shopping-cart-empty.component';

describe('ShoppingCartEmptyComponent', () => {
  let component: ShoppingCartEmptyComponent;
  let fixture: ComponentFixture<ShoppingCartEmptyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCartEmptyComponent]
    });
    fixture = TestBed.createComponent(ShoppingCartEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
