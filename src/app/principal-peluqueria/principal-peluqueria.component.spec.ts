import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalPeluqueriaComponent } from './principal-peluqueria.component';

describe('PrincipalPeluqueriaComponent', () => {
  let component: PrincipalPeluqueriaComponent;
  let fixture: ComponentFixture<PrincipalPeluqueriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalPeluqueriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalPeluqueriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
