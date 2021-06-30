import { TestBed } from '@angular/core/testing';

import { UsersAsyncService } from './users-async.service';

describe('UsersAsyncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersAsyncService = TestBed.get(UsersAsyncService);
    expect(service).toBeTruthy();
  });
});
