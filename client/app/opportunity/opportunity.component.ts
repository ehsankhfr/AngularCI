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
  stepSrv: StepService;

  mockData;

  constructor(router: Router, stepSrv: StepService) {
    this.router = router;
    this.stepSrv = stepSrv;

    this.stepSrv.step = OpportunityComponent.STEP;

    this.stepSrv.data = Object.assign(
      {}, this.stepSrv.data, {[OpportunityComponent.STEP]: this.stepSrv.data[OpportunityComponent.STEP] || {}}
    );

    // Mocking the presented data
    this.mockData = {
      listA: ['item1', 'item2', 'item3'],
      listB: ['item1', 'item2', 'item3'],
      listC: ['item1', 'item2', 'item3']
    };
  }

  ngOnInit() {
  }

  previous(): void {
    this.router.navigate(['/', this.stepSrv.previous(OpportunityComponent.STEP)]);
  }

  submit(): void {
  }
}
