
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Credentials} from "../models/credentials";
import {AuthResponse} from "../models/auth-response";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import * as http from "http";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(credentials: Credentials): Observable<AuthResponse>{
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.post<AuthResponse>(`http://localhost:8080/auth`,credentials,{headers});
  }


  constructor(private http: HttpClient) {
  }
}
