import { TestBed } from '@angular/core/testing';

import { MyDockersService } from './my-dockers.service';

describe('MyDockersService', () => {
  let service: MyDockersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDockersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
