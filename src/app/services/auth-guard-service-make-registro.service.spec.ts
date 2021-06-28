import { TestBed } from '@angular/core/testing';

import { AuthGuardServiceMakeRegistroService } from './auth-guard-service-make-registro.service';

describe('AuthGuardServiceMakeRegistroService', () => {
  let service: AuthGuardServiceMakeRegistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardServiceMakeRegistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
