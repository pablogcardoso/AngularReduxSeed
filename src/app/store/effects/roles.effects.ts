import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { addRole, getRoles, removeRole, setRoles } from '../actions/roles.action';
import { RoleService } from '../../services/role.service';

@Injectable()
export class RolesEffects {

    getRoles$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getRoles),
            switchMap(() => this.rolesService.getRoles().pipe(
                map(result => setRoles({ roles: result })),
                catchError(() => of(setRoles({ roles: [] })))
            ))
        )
    );

    addRole$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addRole),
            switchMap(({ name, permission }) => this.rolesService.addRole(name, [permission]).pipe(
                map(result => setRoles({ roles: result }))
            ))
        )
    );



    removeRole$ = createEffect(() =>
        this.actions$.pipe(
            ofType(removeRole),
            switchMap(({ id }) => this.rolesService.removeRole(id).pipe(
                map(result => setRoles({ roles: result }))
            ))
        )
    );

    constructor(
        private actions$: Actions,
        private rolesService: RoleService
    ) { }
}
