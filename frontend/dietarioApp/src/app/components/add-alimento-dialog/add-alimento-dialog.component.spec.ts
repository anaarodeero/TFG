import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlimentoDialogComponent } from './add-alimento-dialog.component';

describe('AddAlimentoDialogComponent', () => {
  let component: AddAlimentoDialogComponent;
  let fixture: ComponentFixture<AddAlimentoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAlimentoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAlimentoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
