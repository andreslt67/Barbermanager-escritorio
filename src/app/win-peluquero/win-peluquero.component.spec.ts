import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinPeluqueroComponent } from './win-peluquero.component';

describe('WinPeluqueroComponent', () => {
  let component: WinPeluqueroComponent;
  let fixture: ComponentFixture<WinPeluqueroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinPeluqueroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinPeluqueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
