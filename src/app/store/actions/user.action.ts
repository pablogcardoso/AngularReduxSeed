import { createAction, props } from '@ngrx/store';
import { UserEntity } from '../../domain/user.entity';
import { RoleEntity } from '../../domain/role.entity';

export const setUser = createAction('[user] set', props<{ user: UserEntity }>());
export const setUserRole = createAction('[user] set rol', props<{ role: RoleEntity }>());
export const setUsers = createAction('[users] get', props<{ users: UserEntity[] }>());

export const getUsers = createAction('[users] add');

export const getUserError = createAction('[ error on get users]');