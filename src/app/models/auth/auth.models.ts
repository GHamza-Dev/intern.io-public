import {AuthUser} from "../../features/auth/models/auth-user";

export interface AuthState {
  user: AuthUser|null;
  token: string|null;
  loaded: boolean;
  isAuthenticated: boolean,
  errors?: any;
}
