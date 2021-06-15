import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinSubirFotoComponent } from './win-subir-foto.component';

describe('WinSubirFotoComponent', () => {
  let component: WinSubirFotoComponent;
  let fixture: ComponentFixture<WinSubirFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinSubirFotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinSubirFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
