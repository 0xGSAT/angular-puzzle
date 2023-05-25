import { TestBed } from '@angular/core/testing';

import { GetStudentInfoService } from './get-student-info.service';

describe('GetStudentInfoService', () => {
  let service: GetStudentInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStudentInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
