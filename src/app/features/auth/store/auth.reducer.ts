import { createReducer, on } from '@ngrx/store';
import { AuthState } from "../../../models/auth/auth.models";
import * as AuthActions from './auth.actions';

export const initialState: AuthState = {
  user: null,
  token: null,
  loaded: false,
  isAuthenticated: false,
  errors: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, state => ({ ...state, loaded: false, isAuthenticated: false })),
  on(AuthActions.loginSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    isAuthenticated: true,
    loaded: true
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    errors: error,
    loaded: true
  })),
  on(AuthActions.logout, state => initialState)
);
