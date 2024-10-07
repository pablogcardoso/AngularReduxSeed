export interface RoleState {
    roles: RoleEntity[];
    role: RoleEntity;
}

export interface RoleEntity{
    id: string;
    name: string;
    permission: string[];
    status: number;
}