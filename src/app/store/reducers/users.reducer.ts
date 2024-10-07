import { createReducer, on } from '@ngrx/store';
import { AppState } from '../../domain/app-state.entity';
import { UserEntity, UserState } from '../../domain/user.entity';
import { setUser, setUsers } from '../actions/user.action';


let initialState!: UserState;

export const UsersReducer = createReducer(
    initialState,
    on(setUsers, (state,{users}) => {
      const newState = {...state};
      newState.users = users;
      console.log("setting new state for Users");
        return {...newState};
    }),
    on(setUser, (state,{user}) => {
      const newState = {...state};
      newState.user = user;
      return newState;
  } ),
  );

