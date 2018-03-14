import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {OpportunityComponent} from './opportunity.component';
import {StepsComponent} from '../steps/steps.component';
import {StepService} from '../step.service';
import {HomeComponent} from '../home/home.component';
import {SpendSalesComponent} from '../spend-sales/spend-sales.component';
import {BusinessComponent} from '../business/business.component';
import {By} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

const STEPS = {
  HomeComponent,
  BusinessComponent,
  SpendSalesComponent,
  OpportunityComponent,
};

describe('OpportunityComponent', () => {
  let component: OpportunityComponent;
  let fixture: ComponentFixture<OpportunityComponent>;

  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [OpportunityComponent, StepsComponent],
      providers: [StepService]
    }).compileComponents();

    StepService.setSteps(Object.keys(STEPS));
    router = TestBed.get(Router);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityComponent);
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
    console.log(submitEl);
  });
});
