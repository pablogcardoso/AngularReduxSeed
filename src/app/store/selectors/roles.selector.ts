import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { RoleEntity } from "../../domain/role.entity";

export const selectRolesFeature = (state: AppState) => state.roles.roles;
export const selectRoleFeature = (state: AppState) => state.roles.role;

export const selectRoles = createSelector(selectRolesFeature,( state: RoleEntity[])=>state);
export const selectRole = createSelector(selectRoleFeature,( state:RoleEntity)=>state);
