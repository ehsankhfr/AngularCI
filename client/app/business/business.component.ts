import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StepService} from '../step.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  static STEP = 'business';

  router: Router;
  stepSrv: StepService;

  mockData;

  constructor(router: Router, stepSrv: StepService) {
    this.router = router;
    this.stepSrv = stepSrv;

    this.stepSrv.step = BusinessComponent.STEP;

    this.stepSrv.data = Object.assign(
      {}, this.stepSrv.data, {[BusinessComponent.STEP]: this.stepSrv.data[BusinessComponent.STEP] || {}}
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

  next(): void {
    this.router.navigate(['/', this.stepSrv.next(BusinessComponent.STEP)]);
  }

  previous(): void {
    this.router.navigate(['/', this.stepSrv.previous(BusinessComponent.STEP)]);
  }
}
