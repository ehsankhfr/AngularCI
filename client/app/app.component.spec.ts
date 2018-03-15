import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SpendSalesComponent} from './spend-sales/spend-sales.component';
import {BusinessComponent} from './business/business.component';
import {OpportunityComponent} from './opportunity/opportunity.component';
import { StepsComponent } from './steps/steps.component';

import appRoutes from './helpers/appRoutes';
import {FormsModule} from '@angular/forms';

const COMPONENTS = {
  AppComponent,
  PageNotFoundComponent,
  HomeComponent,
  SpendSalesComponent,
  BusinessComponent,
  OpportunityComponent,
  StepsComponent
};

describe('AppComponent', () => {
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(appRoutes(COMPONENTS)), FormsModule],
      declarations: Object.values(COMPONENTS),
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    router.initialNavigation();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  xit('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate(['']);
    tick(50);
    expect(location.path()).toBe('/home');
  }));

  it('navigate to "home" redirects you to /home', fakeAsync(() => {
    router.navigate(['']);
    tick(50);
    expect(location.path()).toBe('/home');
  }));

  it('navigate to "business" takes you to /business', fakeAsync(() => {
    router.navigate(['/business']);
    tick(50);
    expect(location.path()).toBe('/business');
  }));

  it('navigate to "spendSales" takes you to /spendSales', fakeAsync(() => {
    router.navigate(['/spendSales']);
    tick(50);
    expect(location.path()).toBe('/spendSales');
  }));

  it('navigate to "opportunity" takes you to /opportunity', fakeAsync(() => {
    router.navigate(['/opportunity']);
    tick(50);
    expect(location.path()).toBe('/opportunity');
  }));
});
