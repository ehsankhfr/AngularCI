import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {StepsComponent} from './steps.component';
import {StepService} from '../step.service';
import {HomeComponent} from '../home/home.component';
import {SpendSalesComponent} from '../spend-sales/spend-sales.component';
import {BusinessComponent} from '../business/business.component';
import {OpportunityComponent} from '../opportunity/opportunity.component';

const STEPS = {
  HomeComponent,
  BusinessComponent,
  SpendSalesComponent,
  OpportunityComponent,
};

describe('StepsComponent', () => {
  let component: StepsComponent;
  let fixture: ComponentFixture<StepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepsComponent],
      providers: [StepService]
    })
      .compileComponents();

    StepService.setSteps(Object.keys(STEPS));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have three steps', () => {
    const elem = fixture.debugElement;
    const steps = elem.queryAll(By.css('.progress>li'));
    expect(steps.length).toBe(3);
  });
});
