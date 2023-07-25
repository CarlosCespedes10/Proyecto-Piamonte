import { TestBed } from '@angular/core/testing';

import { LoginValidacionService } from './login-validacion.service';

describe('LoginValidacionService', () => {
  let service: LoginValidacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginValidacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
