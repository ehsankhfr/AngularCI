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
  step: StepService;

  constructor(router: Router, step: StepService) {
    this.router = router;
    this.step = step;

    this.step.step = SpendSalesComponent.STEP;
  }

  ngOnInit() {
  }

  next(): void {
    this.router.navigate(['/', this.step.next(SpendSalesComponent.STEP)]);
  }

  previous(): void {
    this.router.navigate(['/', this.step.previous(SpendSalesComponent.STEP)]);
  }
}
