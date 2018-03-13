import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BusinessComponent} from './business.component';
import {StepsComponent} from '../steps/steps.component';
import {RouterTestingModule} from '@angular/router/testing';
import {StepService} from '../step.service';

describe('BusinessComponent', () => {
  let component: BusinessComponent;
  let fixture: ComponentFixture<BusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessComponent, StepsComponent],
      imports: [RouterTestingModule],
      providers: [StepService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
