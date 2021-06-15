import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeluqueroResenasComponent } from './peluquero-resenas.component';

describe('PeluqueroResenasComponent', () => {
  let component: PeluqueroResenasComponent;
  let fixture: ComponentFixture<PeluqueroResenasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeluqueroResenasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeluqueroResenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
