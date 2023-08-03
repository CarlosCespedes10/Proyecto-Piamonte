import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroActividadPageComponent } from './registro-actividad-page.component';

describe('RegistroActividadPageComponent', () => {
  let component: RegistroActividadPageComponent;
  let fixture: ComponentFixture<RegistroActividadPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroActividadPageComponent]
    });
    fixture = TestBed.createComponent(RegistroActividadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
