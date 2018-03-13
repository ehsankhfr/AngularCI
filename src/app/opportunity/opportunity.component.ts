import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StepService} from '../step.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})
export class OpportunityComponent implements OnInit {
  router: Router;

  constructor(router: Router, step: StepService) {
    this.router = router;
  }

  ngOnInit() {
  }

}
