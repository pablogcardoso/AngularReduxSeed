import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RoleEntity, Permission } from '../domain/role.entity';

@Injectable({ providedIn: 'root' })
export class RoleService {

    roles: RoleEntity[] = [
        {
            id: 1,
            name: "admin",
            permission: ["stock", "sales", "config"],
            status: 'active',
        },
        {
            id: 2,
            name: "user",
            permission: ["stock", "sales"],
            status: 'active',
        },
        {
            id: 3, name: "report", permission: ["reports"], status: 'active',
        },
        {
            id: 4,
            name: "maintenance",
            permission: ["reports", "setup"],
            status: 'active',
        }
    ];

    getRoles(): Observable<RoleEntity[]> {
        return of(this.roles);
    }

    getRole(id: number): Observable<RoleEntity | null> {
        let filtered = this.roles.filter((value, index) => {
            return (value.id === id);
        })
        return filtered.length > 0 ? of(filtered[0]) : of(null);
    }

    removeRole(id: number): Observable<RoleEntity[]> {
        const roles = this.roles.filter(r => r.id !== id);
        /**
         * this line mock a delete operation in the backend
         */
        this.roles = roles;
        /**
         * return filtered value to effect to update the store
         */
        return of([...roles]);
    }

    addRole(name: string, permission: Permission[]): Observable<RoleEntity[]> {
        const newId = this.roles.length > 0
            ? Math.max(...this.roles.map(r => r.id)) + 1
            : 1;
        const newRole: RoleEntity = { id: newId, name, permission, status: 'active' };
        this.roles = [...this.roles, newRole];
        /**
         * its necesary to return values for the effect
         */
        return of([...this.roles]);
    }

    getPermissionsRoles(): Permission[] {
        return ["stock", "sales", "config", "reports", "setup"];
    }
}
