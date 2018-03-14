import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SpendSalesComponent} from './spend-sales.component';
import {RouterTestingModule} from '@angular/router/testing';
import {StepService} from '../step.service';

describe('SpendSalesComponent', () => {
  let component: SpendSalesComponent;
  let fixture: ComponentFixture<SpendSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SpendSalesComponent],
      providers: [StepService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
