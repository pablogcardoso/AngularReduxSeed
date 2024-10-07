import { RoleEntity } from "./role.entity";
import { UserEntity } from "./user.entity";

export interface AppState {
    users: UserEntity[];
    roles: RoleEntity[];
    currentUser: UserEntity | null;
}