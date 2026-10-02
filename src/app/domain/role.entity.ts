export type Permission = "stock" | "sales" | "config" | "reports" | "setup";
export type RolStatus = "active" | "inactive";

export interface RoleState {
    roles: RoleEntity[];
    role: RoleEntity;
}

export interface RoleEntity{
    id: number;
    name: string;
    permission: Permission[];
    status: RolStatus;
}