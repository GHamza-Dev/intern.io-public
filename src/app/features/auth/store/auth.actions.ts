import { createAction, props } from '@ngrx/store';
import {AuthResponse} from "../models/auth-response";
import {Credentials} from "../models/credentials";


export const login = createAction(
  '[Auth] Login',
  props<Credentials>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<AuthResponse>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const logout = createAction(
  '[Auth] Logout'
);
