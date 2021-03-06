import {Routes} from '@angular/router';

function appRoutes(routes): Routes {
    return [
      {path: 'home', component: routes.HomeComponent},
      {path: 'business', component: routes.BusinessComponent},
      {path: 'spend-sales', component: routes.SpendSalesComponent},
      {path: 'opportunity', component: routes.OpportunityComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '**', component: routes.PageNotFoundComponent}
    ];
}

export default appRoutes;
