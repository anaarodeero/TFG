import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPlanComponent } from './dialy-plan.component';

describe('DailyPlanComponent', () => {
  let component: DailyPlanComponent;
  let fixture: ComponentFixture<DailyPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
