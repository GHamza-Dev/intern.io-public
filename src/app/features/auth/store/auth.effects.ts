import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AuthActions from './auth.actions';
import { AuthService } from '../services/auth.service';
import {Router} from "@angular/router";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(action => {
        return this.authService.login(action).pipe(
            map(response => AuthActions.loginSuccess(response)),
            catchError(error => of(AuthActions.loginFailure({error})))
          )
        }
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      map(() => {
        localStorage.removeItem('currentUser');
        return { type: 'NO_ACTION' };
      })
    )
  );

  storeUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      map(action => {
        console.log("LOGIN SUCCESS")
        console.log(action)
        const currentUser = {
          user: action.user,
          token: action.token
        }
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        this.router.navigateByUrl('/welcome').then(r => r)
        return { type: 'NO_ACTION' };
      })
    )
  );

  loginFailure$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(AuthActions.loginFailure),
      map(action=>{
        console.error("LOGIN FAILED")
        console.log(action)
        alert(action.error.error.message);
        this.router.navigateByUrl('/login').then(r => r)
        return {type: 'NO_ACTION'}
      })
    )
  })

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
