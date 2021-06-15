import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeluqueriaInfoComponent } from './peluqueria-info.component';

describe('PeluqueriaInfoComponent', () => {
  let component: PeluqueriaInfoComponent;
  let fixture: ComponentFixture<PeluqueriaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeluqueriaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeluqueriaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
