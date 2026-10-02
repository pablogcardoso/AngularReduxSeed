import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeToggleComponent } from './modules/shared/theme-toggle/theme-toggle.component';
import { RoleListComponent } from './modules/roles/roles-list/roles-list.component';
import { UserListComponent } from './modules/users/user-list/user-list.component';
import { UsersPermissionsBarChartComponent } from './modules/chart/users-permissions-bar-chart/users-permissions-bar-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ThemeToggleComponent,
    RoleListComponent,
    UserListComponent,
    UsersPermissionsBarChartComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AngularRedux';
  isLogged: boolean = false;

  gotTo(route: string) {

  }
}
