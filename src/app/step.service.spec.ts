import {TestBed, inject} from '@angular/core/testing';

import {StepService} from './step.service';
import {OpportunityComponent} from './opportunity/opportunity.component';
import {SpendSalesComponent} from './spend-sales/spend-sales.component';
import {HomeComponent} from './home/home.component';
import {BusinessComponent} from './business/business.component';

describe('StepService', () => {
  beforeEach(() => {
    StepService.setSteps(
      Object.keys({
        HomeComponent,
        BusinessComponent,
        SpendSalesComponent,
        OpportunityComponent
      })
    );

    TestBed.configureTestingModule({
      providers: [StepService]
    });
  });

  it('should be created', inject([StepService], (service: StepService) => {
    expect(service).toBeTruthy();
  }));

  it('should start from the first step', inject([StepService], (service: StepService) => {
    expect(service.stepId).toBe(0);
  }));

  it('should not exceed max Step', inject([StepService], (service: StepService) => {
    for (let counter = 1; counter < 15; counter++) {
      service.next();
    }

    expect(service.stepId).toBe(3);
  }));

  it('should not go lower than min Step', inject([StepService], (service: StepService) => {
    for (let counter = 1; counter < 15; counter++) {
      service.previous();
    }

    expect(service.stepId).toBe(0);
  }));
});
