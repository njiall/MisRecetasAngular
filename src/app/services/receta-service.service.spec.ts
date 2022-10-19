import { TestBed } from '@angular/core/testing';

import { RecetaServiceService } from './receta-service.service';

describe('RecetaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecetaServiceService = TestBed.get(RecetaServiceService);
    expect(service).toBeTruthy();
  });
});
