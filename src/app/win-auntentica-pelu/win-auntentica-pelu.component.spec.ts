import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinAuntenticaPeluComponent } from './win-auntentica-pelu.component';

describe('WinAuntenticaPeluComponent', () => {
  let component: WinAuntenticaPeluComponent;
  let fixture: ComponentFixture<WinAuntenticaPeluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinAuntenticaPeluComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinAuntenticaPeluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
