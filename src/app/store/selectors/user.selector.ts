import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { UserEntity } from "../../domain/user.entity";

export const selectUsersFeature = (state: AppState) => state.user.users;
export const selectUserFeature = (state: AppState) => state.user.user;

export const selectUsers = createSelector(selectUsersFeature,( state: UserEntity[])=>state);
export const selectUser = createSelector(selectUserFeature,( state:UserEntity)=>state);
