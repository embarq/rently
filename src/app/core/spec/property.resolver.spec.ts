import { TestBed } from '@angular/core/testing';

import { PropertyResolver } from '../property.resolver';

describe('PropertyResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropertyResolver = TestBed.get(PropertyResolver);
    expect(service).toBeTruthy();
  });
});
