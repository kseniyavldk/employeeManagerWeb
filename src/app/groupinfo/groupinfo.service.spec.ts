import { TestBed } from '@angular/core/testing';

import { GroupInfoService } from './groupinfo.service';

describe('GroupInfoService', () => {
  let service: GroupInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
