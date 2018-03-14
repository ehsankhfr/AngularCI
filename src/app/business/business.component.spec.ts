import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BusinessComponent} from './business.component';
import {StepsComponent} from '../steps/steps.component';
import {RouterTestingModule} from '@angular/router/testing';
import {StepService} from '../step.service';
import {HomeComponent} from '../home/home.component';
import {SpendSalesComponent} from '../spend-sales/spend-sales.component';
import {OpportunityComponent} from '../opportunity/opportunity.component';
import {By} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

const STEPS = {
  HomeComponent,
  BusinessComponent,
  SpendSalesComponent,
  OpportunityComponent,
};

describe('BusinessComponent', () => {
  let component: BusinessComponent;
  let fixture: ComponentFixture<BusinessComponent>;

  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessComponent, StepsComponent],
      imports: [RouterTestingModule],
      providers: [StepService]
    })
      .compileComponents();

    StepService.setSteps(Object.keys(STEPS));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have progess template', () => {
    const elem = fixture.debugElement;

    const steps = elem.queryAll(By.css('.progress'));
    expect(steps.length).toBe(1);
  });

  it('should navigate to opportunity', () => {
    const spy = spyOn(router, 'navigate');
    const submitEl = fixture.debugElement.query(By.css('.next-btn'));
    submitEl.triggerEventHandler('click', null);
    const url = spy.calls.first().args[0][1];

    expect(url).toBe('spend-sales');
  });
});
