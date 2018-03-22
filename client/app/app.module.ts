import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {BusinessComponent} from './business/business.component';
import {SpendSalesComponent} from './spend-sales/spend-sales.component';
import {OpportunityComponent} from './opportunity/opportunity.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {StepsComponent} from './steps/steps.component';

import appRoutes from './helpers/appRoutes';
import {StepService} from './step.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const COMPONENTS = {
  AppComponent,
  PageNotFoundComponent,
  HomeComponent,
  SpendSalesComponent,
  BusinessComponent,
  OpportunityComponent,
  StepsComponent
};

const STEPS = {
  HomeComponent,
  BusinessComponent,
  SpendSalesComponent,
  OpportunityComponent,
};

@NgModule({
  declarations: Object.values(COMPONENTS),
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes(COMPONENTS),
      {enableTracing: true} // <-- debugging purposes only
    ),
    FormsModule,
    HttpClientModule
  ],
  providers: [StepService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    StepService.setSteps(Object.keys(STEPS));
  }
}
