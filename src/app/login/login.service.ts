import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginForm } from '../dto/LoginForm';

@Injectable()
export class LoginService {
    loginUrl = 'http://localhost:5069/api/auth/login';  // URL to web api
    constructor(private http: HttpClient) { }

    login(loginForm: LoginForm): Observable<any> {
        return this.http.post<any>(this.loginUrl, loginForm)
    }
}