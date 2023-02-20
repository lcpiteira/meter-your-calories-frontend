import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodFormComponentComponent } from './food-form-component.component';

describe('FoodFormComponentComponent', () => {
  let component: FoodFormComponentComponent;
  let fixture: ComponentFixture<FoodFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
