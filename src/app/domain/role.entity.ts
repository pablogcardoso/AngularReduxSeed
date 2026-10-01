export interface RoleState {
    roles: RoleEntity[];
    role: RoleEntity;
}

export interface RoleEntity{
    id: number;
    name: string;
    permission: string[];
    status: number;
}