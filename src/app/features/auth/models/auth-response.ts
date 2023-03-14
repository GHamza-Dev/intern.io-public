import {AuthUser} from "./auth-user";

export interface AuthResponse {
  message: string,
  status: number,
  user: AuthUser | null,
  token: string | null,
}
