import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BusinessComponent } from './business/business.component';
import { SpendSalesComponent } from './spend-sales/spend-sales.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import appRoutes from './helpers/appRoutes';

const COMPONENTS = {
  AppComponent,
  PageNotFoundComponent,
  HomeComponent,
  SpendSalesComponent,
  BusinessComponent,
  OpportunityComponent,
  MainComponent
};

@NgModule({
  declarations: Object.values(COMPONENTS),
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes(COMPONENTS),
      {enableTracing: true} // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
