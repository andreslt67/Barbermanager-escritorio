import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPeluqueriaComponent } from './nav-peluqueria.component';

describe('NavPeluqueriaComponent', () => {
  let component: NavPeluqueriaComponent;
  let fixture: ComponentFixture<NavPeluqueriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavPeluqueriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPeluqueriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
