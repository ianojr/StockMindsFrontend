import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNav } from './dashboard-nav';

describe('DashboardNav', () => {
  let component: DashboardNav;
  let fixture: ComponentFixture<DashboardNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
