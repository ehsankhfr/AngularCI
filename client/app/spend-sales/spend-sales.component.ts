import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StepService} from '../step.service';

@Component({
  selector: 'app-spend-sales',
  templateUrl: './spend-sales.component.html',
  styleUrls: ['./spend-sales.component.scss']
})
export class SpendSalesComponent implements OnInit {
  static STEP = 'spend-sales';

  router: Router;
  stepSrv: StepService;

  mockData;

  constructor(router: Router, stepSrv: StepService) {
    this.router = router;
    this.stepSrv = stepSrv;

    this.stepSrv.step = SpendSalesComponent.STEP;

    this.stepSrv.data = Object.assign(
      {}, this.stepSrv.data, {['spendSales']: this.stepSrv.data['spendSales'] || {}}
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
    this.router.navigate(['/', this.stepSrv.next(SpendSalesComponent.STEP)]);
  }

  previous(): void {
    this.router.navigate(['/', this.stepSrv.previous(SpendSalesComponent.STEP)]);
  }
}
