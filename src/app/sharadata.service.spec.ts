import { TestBed } from '@angular/core/testing';

import { SharadataService } from './sharadata.service';

describe('SharadataService', () => {
  let service: SharadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
