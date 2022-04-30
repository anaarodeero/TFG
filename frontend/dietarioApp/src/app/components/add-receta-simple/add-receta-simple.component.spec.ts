import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecetaSimpleComponent } from './add-receta-simple.component';

describe('AddRecetaSimpleComponent', () => {
  let component: AddRecetaSimpleComponent;
  let fixture: ComponentFixture<AddRecetaSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecetaSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecetaSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
