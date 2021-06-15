import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivPeluExpansionComponent } from './div-pelu-expansion.component';

describe('DivPeluExpansionComponent', () => {
  let component: DivPeluExpansionComponent;
  let fixture: ComponentFixture<DivPeluExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivPeluExpansionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivPeluExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
