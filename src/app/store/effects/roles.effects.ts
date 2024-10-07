import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { getUserError } from '../actions/user.action';
import { getRoles, setRoles } from '../actions/roles.action';
import { RoleService } from '../../services/role.service';

@Injectable()
export class RolesEffects {

    getUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType('[user] get effect'),
            switchMap(() => this.rolesServices.getRoles().pipe(
                map(result => setRoles({ roles: result })),
                catchError(() => of(getUserError()))
            ))
        )
    );

    constructor(
        private actions$: Actions,
        private rolesServices: RoleService
    ) { }
}