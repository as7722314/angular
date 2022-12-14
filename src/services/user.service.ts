import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
    baseUrl: string = 'http://localhost:5069/api/user';
    constructor(private http: HttpClient) { }

    getUser(id: number): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/${id}`);
    }
}