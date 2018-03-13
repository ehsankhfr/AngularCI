import {TestBed, inject} from '@angular/core/testing';

import {StepService} from './step.service';

describe('StepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StepService]
    });
  });

  it('should be created', inject([StepService], (service: StepService) => {
    expect(service).toBeTruthy();
  }));

  it('should start from the first step', inject([StepService], (service: StepService) => {
    expect(service.step).toBe(StepService.MIN_STEP);
  }));

  it('should not exceed max Step', inject([StepService], (service: StepService) => {
    for (let counter = 1; counter < 15; counter++) {
      service.next();
    }

    expect(service.step).toBe(StepService.MAX_STEP);
  }));

  it('should not go lower than min Step', inject([StepService], (service: StepService) => {
    for (let counter = 1; counter < 15; counter++) {
      service.previous();
    }

    expect(service.step).toBe(StepService.MIN_STEP);
  }));
});
