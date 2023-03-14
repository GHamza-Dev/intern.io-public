import {Role} from "./role";

export interface AuthUser{
    id?: number,
    email: string,
    phone: string,
    image: string,
    roles: Array<Role> | null,
    firstName?: string,
    lastName?: string
}
