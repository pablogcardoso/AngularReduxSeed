import { createReducer, on } from '@ngrx/store';
import { RoleEntity, RoleState } from '../../domain/role.entity';
import { setRoles } from '../actions/roles.action';


let initialState!: RoleState;

export const RolesReducer = createReducer(
    initialState,
    on(setRoles, (state,{roles}) => {
        const newState = {...state};
        newState.roles = roles;
        console.log("setting new state for Roles");
          return {...newState};
    })
  );

