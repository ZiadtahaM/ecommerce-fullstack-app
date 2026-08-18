import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { aynelaGuard } from './aynela.guard';

describe('aynelaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => aynelaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
