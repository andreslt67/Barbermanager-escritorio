import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeluqueroCitasComponent } from './peluquero-citas.component';

describe('PeluqueroCitasComponent', () => {
  let component: PeluqueroCitasComponent;
  let fixture: ComponentFixture<PeluqueroCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeluqueroCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeluqueroCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
