import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from "../../store/auth.actions";
import {selectIsAuthenticated} from "../../store/auth.selectors";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email!: string;
  remember: boolean = false;
  password!: string;

  isAuthenticated$ = this.store.select(selectIsAuthenticated)

  constructor(private store: Store) {}

  login(){
    this.store.dispatch(AuthActions.login({ username: this.email, password: this.password }));
  }
}
