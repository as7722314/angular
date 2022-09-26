import { Injectable } from "@angular/core";

import { Message } from "src/app/interface/message";

import { MatSnackBar } from "@angular/material/snack-bar";



@Injectable({ providedIn: 'root' })
export class MessageService {
    constructor(private _snackBar: MatSnackBar) { }

    show(message: Message) {
        this._snackBar.open(message.content, message.action, {
            horizontalPosition: message.horizontal,
            verticalPosition: message.vertical,
        });
        this.close();
    }
    
    close() {
        setTimeout(() => this._snackBar.dismiss(), 3500)
    }
}