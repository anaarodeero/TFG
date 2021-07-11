import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapFoodDialogComponent } from './swap-food-dialog.component';

describe('SwapFoodDialogComponent', () => {
  let component: SwapFoodDialogComponent;
  let fixture: ComponentFixture<SwapFoodDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwapFoodDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapFoodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
