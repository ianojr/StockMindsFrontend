import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNavTop } from './dashboard-nav-top';

describe('DashboardNavTop', () => {
  let component: DashboardNavTop;
  let fixture: ComponentFixture<DashboardNavTop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardNavTop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardNavTop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
