import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPyramidComponent } from './food-pyramid.component';

describe('FoodPyramidComponent', () => {
  let component: FoodPyramidComponent;
  let fixture: ComponentFixture<FoodPyramidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodPyramidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodPyramidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
