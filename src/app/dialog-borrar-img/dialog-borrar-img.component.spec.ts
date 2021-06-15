import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBorrarImgComponent } from './dialog-borrar-img.component';

describe('DialogBorrarImgComponent', () => {
  let component: DialogBorrarImgComponent;
  let fixture: ComponentFixture<DialogBorrarImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBorrarImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBorrarImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
