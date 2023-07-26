import { TestBed } from '@angular/core/testing';

import { DatosValidacionService } from './datos-validacion.service';

describe('DatosValidacionService', () => {
  let service: DatosValidacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosValidacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
