import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable } from "rxjs";
import { Router } from "@angular/router";
import { MessageService } from "src/services/message.service";
import { Message } from "../interface/message";

@Injectable()
export class TokenAuthHttpInterceptor implements HttpInterceptor {
    message: Message = {
        action: "Close",
        content: "Success",
        horizontal: 'right',
        vertical: 'top'
    };

    constructor(private router: Router, private messageService: MessageService) { }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newRequest = req;
        if (sessionStorage.getItem('token')) {
            newRequest = req.clone({ setHeaders: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } });
        }
        return next.handle(newRequest)
            .pipe(
                catchError((err: HttpErrorResponse) => {
                    if (err.status == 401) {
                        this.message.content = "No Aermission To Activat";
                        this.messageService.show(this.message);
                        sessionStorage.clear();
                        this.router.navigate(["/"]);
                    }
                    this.message.content = err.error.message;
                    this.messageService.show(this.message);
                    console.log(err.error.message);
                    throw err;
                })
            );
    }
}