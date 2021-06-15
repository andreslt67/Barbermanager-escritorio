import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinPeluqueriaComponent } from './win-peluqueria.component';

describe('WinPeluqueriaComponent', () => {
  let component: WinPeluqueriaComponent;
  let fixture: ComponentFixture<WinPeluqueriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinPeluqueriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinPeluqueriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
