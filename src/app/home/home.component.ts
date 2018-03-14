import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StepService} from '../step.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  static STEP = 'home';
  router: Router;
  step: StepService;

  constructor(router: Router, step: StepService) {
    this.router = router;
    this.step = step;

    this.step.step = HomeComponent.STEP;
  }

  ngOnInit() {
  }

  next(): void {
    this.router.navigate(['/', this.step.next(HomeComponent.STEP)]);
  }
}
