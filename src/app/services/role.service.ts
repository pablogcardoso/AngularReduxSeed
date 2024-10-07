import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RoleEntity } from '../domain/role.entity';

@Injectable({ providedIn: 'root' })
export class RoleService {

    //mock data
    roles: RoleEntity[] = [
        {
            id: "1", name: "admin", permission: ["stock", "sales", "config"], status: 1, 
        },
        {
            id: "1", name: "user", permission: ["stock", "sales"], status: 1, 
        },
        {
            id: "1", name: "report", permission: ["reports"], status: 1,
        }
    ];

    constructor() { }

    getRoles(): Observable<RoleEntity[]> {
        //Return Mock
        return of(this.roles);
    }

    getRole(id: string): Observable<RoleEntity | null> {
        //Mock unique role
        let filtered = this.roles.filter((value, index) => {
            return (value.id == id);
        })
        return filtered.length > 0 ? of(filtered[0]) : of(null);
    }

}