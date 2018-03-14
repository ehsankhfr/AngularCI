import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SpendSalesComponent} from './spend-sales.component';
import {RouterTestingModule} from '@angular/router/testing';
import {StepService} from '../step.service';
import {By} from '@angular/platform-browser';
import {StepsComponent} from '../steps/steps.component';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {OpportunityComponent} from '../opportunity/opportunity.component';
import {HomeComponent} from '../home/home.component';
import {BusinessComponent} from '../business/business.component';

const STEPS = {
  HomeComponent,
  BusinessComponent,
  SpendSalesComponent,
  OpportunityComponent,
};

describe('SpendSalesComponent', () => {
  let component: SpendSalesComponent;
  let fixture: ComponentFixture<SpendSalesComponent>;

  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SpendSalesComponent, StepsComponent],
      providers: [StepService]
    })
      .compileComponents();

    StepService.setSteps(Object.keys(STEPS));
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendSalesComponent);
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

  it('should navigate forward to opportunity', () => {
    const spy = spyOn(router, 'navigate');
    const submitEl = fixture.debugElement.query(By.css('.next-btn'));
    submitEl.triggerEventHandler('click', null);
    const url = spy.calls.first().args[0][1];

    expect(url).toBe('opportunity');
  });

  it('should navigate back to business', () => {
    const spy = spyOn(router, 'navigate');
    const submitEl = fixture.debugElement.query(By.css('.prev-btn'));
    submitEl.triggerEventHandler('click', null);
    const url = spy.calls.first().args[0][1];

    expect(url).toBe('business');
  });

  it('should have form', () => {
    const elem = fixture.debugElement.query(By.css('.step-form'));
    expect(elem).toBeTruthy();
  });

  it('should have buttons', () => {
    const elem = fixture.debugElement.query(By.css('.step__buttons'));
    expect(elem).toBeTruthy();
  });
});
