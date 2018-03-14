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
  step: StepService;

  constructor(router: Router, step: StepService) {
    this.router = router;
    this.step = step;

    this.step.step = BusinessComponent.STEP;
  }

  ngOnInit() {
  }

  next(): void {
    this.router.navigate(['/', this.step.next(BusinessComponent.STEP)]);
  }
}
