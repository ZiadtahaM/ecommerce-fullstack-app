import { TestBed } from '@angular/core/testing';

import { ProducthomeService } from './producthome.service';

describe('ProducthomeService', () => {
  let service: ProducthomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducthomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
