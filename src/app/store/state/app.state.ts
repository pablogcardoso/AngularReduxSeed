import { ActionReducerMap } from "@ngrx/store";
import { UserState } from "../../domain/user.entity";
import { RoleEntity, RoleState } from "../../domain/role.entity";
import { UsersReducer } from "../reducers/users.reducer";
import { RolesReducer } from "../reducers/roles.reducer";

export interface AppState {
    user: UserState;
    roles: RoleState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    user: UsersReducer,
    roles:RolesReducer
}
