import { TestBed } from '@angular/core/testing';

import { TableServiceService } from './table-service.service';

describe('TableServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableServiceService = TestBed.get(TableServiceService);
    expect(service).toBeTruthy();
  });
});
