import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosPageComponent } from './vehiculos-page.component';

describe('VehiculosPageComponent', () => {
  let component: VehiculosPageComponent;
  let fixture: ComponentFixture<VehiculosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiculosPageComponent]
    });
    fixture = TestBed.createComponent(VehiculosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
