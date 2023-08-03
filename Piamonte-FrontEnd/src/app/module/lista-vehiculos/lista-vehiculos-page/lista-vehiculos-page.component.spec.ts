import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVehiculosPageComponent } from './lista-vehiculos-page.component';

describe('ListaVehiculosPageComponent', () => {
  let component: ListaVehiculosPageComponent;
  let fixture: ComponentFixture<ListaVehiculosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaVehiculosPageComponent]
    });
    fixture = TestBed.createComponent(ListaVehiculosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
