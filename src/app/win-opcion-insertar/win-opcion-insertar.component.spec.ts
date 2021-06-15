import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinOpcionInsertarComponent } from './win-opcion-insertar.component';

describe('WinOpcionInsertarComponent', () => {
  let component: WinOpcionInsertarComponent;
  let fixture: ComponentFixture<WinOpcionInsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinOpcionInsertarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinOpcionInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
