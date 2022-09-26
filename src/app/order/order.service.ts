import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OrderService {
    orderUrl = 'http://localhost:5069/api/order';  // URL to web api
    constructor(private http: HttpClient) { }

    getOrders(name: string = 'id', sort: string = "asc"): Observable<any> {
        return this.http.get<any>(`${this.orderUrl}?sortName=${name}&sort=${sort}`)
    }
}