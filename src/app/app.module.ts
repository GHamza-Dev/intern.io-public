import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {LoginComponent} from "./features/auth/components/login/login.component";
import {authReducer} from "./features/auth/store/auth.reducer";
import {AuthEffects} from "./features/auth/store/auth.effects";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
import { MainComponent } from './shared/layout/main/main.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LogoComponent } from './shared/components/logo/logo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    MainComponent,
    NavComponent,
    FooterComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({auth: authReducer}),
    EffectsModule.forRoot([AuthEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
