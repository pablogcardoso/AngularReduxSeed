import { Routes } from '@angular/router';
import { UserListComponent } from './modules/users/user-list/user-list.component';
import { UserComponent } from './modules/users/user-view/user.component';
import { RoleListComponent } from './modules/roles/roles-list/roles-list.component';


export const routes: Routes = [
    {
        path:"",
        component:UserListComponent
    },
    {
        path:"users",
        component:UserListComponent
    },
    {
        path:"user",
        component:UserComponent
    },
    {
        path:"roles",
        component: RoleListComponent
    }
];
