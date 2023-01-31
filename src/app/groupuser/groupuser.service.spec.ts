import { TestBed } from '@angular/core/testing';

import { GroupuserService } from './groupuser.service';

describe('GroupuserService', () => {
  let service: GroupuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
