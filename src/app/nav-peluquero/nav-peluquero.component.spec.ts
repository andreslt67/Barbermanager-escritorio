import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPeluqueroComponent } from './nav-peluquero.component';

describe('NavPeluqueroComponent', () => {
  let component: NavPeluqueroComponent;
  let fixture: ComponentFixture<NavPeluqueroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavPeluqueroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPeluqueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
