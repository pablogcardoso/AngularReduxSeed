import { createAction, props } from '@ngrx/store';
import { Permission, RoleEntity } from '../../domain/role.entity';

export const setRoles = createAction('[role] set', props<{ roles: RoleEntity[] }>());
export const getRoles = createAction('[role] get effect');

export const addRole = createAction('[role] add', props<{ name:string, permission: Permission }>());
export const removeRole = createAction('[role] remove', props<{ id: number }>());

export const getRolesError = createAction('[error on get roles]');
