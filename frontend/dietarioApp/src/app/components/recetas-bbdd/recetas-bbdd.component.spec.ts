import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasBBDDComponent } from './recetas-bbdd.component';

describe('RecetasBBDDComponent', () => {
  let component: RecetasBBDDComponent;
  let fixture: ComponentFixture<RecetasBBDDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetasBBDDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetasBBDDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
