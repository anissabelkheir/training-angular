import { TestBed } from '@angular/core/testing';

import { ListeService } from './liste.service';

describe('ListeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListeService = TestBed.get(ListeService);
    expect(service).toBeTruthy();
  });
});
