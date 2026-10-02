import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPermissionsBarChartComponent } from './users-permissions-bar-chart.component';

describe('UsersPermissionsBarChartComponent', () => {
  let component: UsersPermissionsBarChartComponent;
  let fixture: ComponentFixture<UsersPermissionsBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersPermissionsBarChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersPermissionsBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});