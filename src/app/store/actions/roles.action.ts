import { createAction, props } from '@ngrx/store';
import { RoleEntity } from '../../domain/role.entity';

export const setRoles = createAction('[user] set', props<{ roles: RoleEntity[]}>());
export const getRoles = createAction('[user] get effect');

export const getRolesError = createAction('[ error on get users]');
