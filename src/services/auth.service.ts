import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserDto } from "src/app/dto/UserDto";

@Injectable({ providedIn: "root" })
export class AuthService {
    baseUrl: string = 'http://localhost:5069/api/auth/user';
    user = new UserDto();
    constructor(private http: HttpClient) { }

    getAuthUser(): Observable<any> {
        return this.http.get<any>(this.baseUrl);
    }

    setUserInfo(data: UserDto): void {
        this.user.id = data.id;
        this.user.name = data.name;
        this.user.email = data.email;
        this.user.token = sessionStorage.getItem('token') ?? "";
    }

    getUserInfo(): UserDto {
        return this.user;
    }
}