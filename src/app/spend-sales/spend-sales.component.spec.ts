import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendSalesComponent } from './spend-sales.component';

describe('SpendSalesComponent', () => {
  let component: SpendSalesComponent;
  let fixture: ComponentFixture<SpendSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
