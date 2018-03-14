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
    router = TestBed.get(Router);
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

  it('should navigate forward to spand-sales', () => {
    const spy = spyOn(router, 'navigate');
    const submitEl = fixture.debugElement.query(By.css('.next-btn'));
    submitEl.triggerEventHandler('click', null);
    const url = spy.calls.first().args[0][1];

    expect(url).toBe('spend-sales');
  });

  it('should navigate back to home', () => {
    const spy = spyOn(router, 'navigate');
    const submitEl = fixture.debugElement.query(By.css('.prev-btn'));
    submitEl.triggerEventHandler('click', null);
    const url = spy.calls.first().args[0][1];

    expect(url).toBe('home');
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
