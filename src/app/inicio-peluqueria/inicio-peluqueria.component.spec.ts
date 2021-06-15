import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPeluqueriaComponent } from './inicio-peluqueria.component';

describe('InicioPeluqueriaComponent', () => {
  let component: InicioPeluqueriaComponent;
  let fixture: ComponentFixture<InicioPeluqueriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioPeluqueriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPeluqueriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
