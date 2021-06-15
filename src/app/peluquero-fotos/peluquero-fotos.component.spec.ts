import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeluqueroFotosComponent } from './peluquero-fotos.component';

describe('PeluqueroFotosComponent', () => {
  let component: PeluqueroFotosComponent;
  let fixture: ComponentFixture<PeluqueroFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeluqueroFotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeluqueroFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
