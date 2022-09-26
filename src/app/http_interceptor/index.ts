import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, throwError } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class TokenAuthHttpInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newRequest = req;
        if (sessionStorage.getItem('token')) {
            newRequest = req.clone({ setHeaders: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } });
        }
        return next.handle(newRequest)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    if (error.status == 401) {
                        alert('No Aermission To Activate')
                        sessionStorage.clear();
                        this.router.navigate(["/"]);
                    }
                    console.log(error);
                    throw error;
                })
            );
    }
}