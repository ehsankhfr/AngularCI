import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StepService} from '../step.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})
export class OpportunityComponent implements OnInit {
  static STEP = 'opportunity';
  router: Router;
  step: StepService;

  constructor(router: Router, step: StepService) {
    this.router = router;
    this.step = step;

    this.step.step = OpportunityComponent.STEP;
  }

  ngOnInit() {
  }

  previous(): void {
    this.router.navigate(['/', this.step.previous(OpportunityComponent.STEP)]);
  }

  submit(): void {
  }
}
