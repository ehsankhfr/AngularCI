import {Component, OnInit} from '@angular/core';
import {StepService} from '../step.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  steps: string[];
  stepSrv: StepService;

  constructor(step: StepService) {
    this.steps = step.getSteps().filter((title) => title !== 'home');
    this.stepSrv = step;
  }

  ngOnInit() {
  }

  isComplete(stepId: number) {
    return this.stepSrv.stepId < stepId;
  }

  isActive(stepId: number) {
    return this.stepSrv.stepId === stepId;
  }

  isProgressLast(stepId: number) {
    return this.stepSrv.stepId > stepId;
  }
}
