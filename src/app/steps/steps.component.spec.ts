import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import { StepsComponent } from './steps.component';

describe('StepsComponent', () => {
  let component: StepsComponent;
  let fixture: ComponentFixture<StepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsComponent ]
    })
    .compileComponents();
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
