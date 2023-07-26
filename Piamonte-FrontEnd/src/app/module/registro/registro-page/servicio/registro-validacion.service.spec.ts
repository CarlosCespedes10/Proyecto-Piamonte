import { TestBed } from '@angular/core/testing';

import { RegistroValidacionService } from './registro-validacion.service';

describe('RegistroValidacionService', () => {
  let service: RegistroValidacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroValidacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
