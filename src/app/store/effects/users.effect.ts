import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';

import { UserService } from '../../services/user.service';
import { getUserError, getUsers, setUser, setUsers } from '../actions/user.action';
//import { MoviesService } from './movies.service';


@Injectable()
export class UsersEffects {

 getUsers$ = createEffect(() =>
  this.actions$.pipe(
    ofType('[users] add'),
    switchMap(() => this.userServices.getUsers().pipe(
      map(result => setUsers({users: result})),
      catchError(() => of(getUserError()))
    ))
  )
);

constructor(
    private actions$: Actions,
    private userServices: UserService
  ) {}
}