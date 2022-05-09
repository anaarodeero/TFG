import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPyramidVegComponent } from './food-pyramid-veg.component';

describe('FoodPyramidVegComponent', () => {
  let component: FoodPyramidVegComponent;
  let fixture: ComponentFixture<FoodPyramidVegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodPyramidVegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodPyramidVegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
