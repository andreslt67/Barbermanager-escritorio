import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeluqueroInfoComponent } from './peluquero-info.component';

describe('PeluqueroInfoComponent', () => {
  let component: PeluqueroInfoComponent;
  let fixture: ComponentFixture<PeluqueroInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeluqueroInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeluqueroInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
