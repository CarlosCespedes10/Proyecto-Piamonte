import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoPageComponent } from './mantenimiento-page.component';

describe('MantenimientoPageComponent', () => {
  let component: MantenimientoPageComponent;
  let fixture: ComponentFixture<MantenimientoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenimientoPageComponent]
    });
    fixture = TestBed.createComponent(MantenimientoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
