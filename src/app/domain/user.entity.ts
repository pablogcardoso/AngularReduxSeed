export interface UserState {
    users: UserEntity[];
    user: UserEntity;
}
export interface UserEntity {
    id: string;
    name: string;
    email: string;
    roles: string[];
    status: number;
}