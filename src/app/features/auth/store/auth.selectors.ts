
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from "../../../models/auth/auth.models";

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUser = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);

export const selectToken = createSelector(
  selectAuthState,
  (state: AuthState) => state.token
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated
);

export const selectIsLoaded = createSelector(
  selectAuthState,
  (state: AuthState) => state.loaded
)
