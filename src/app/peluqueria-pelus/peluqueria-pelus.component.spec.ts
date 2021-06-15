import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeluqueriaPelusComponent } from './peluqueria-pelus.component';

describe('PeluqueriaPelusComponent', () => {
  let component: PeluqueriaPelusComponent;
  let fixture: ComponentFixture<PeluqueriaPelusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeluqueriaPelusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeluqueriaPelusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
