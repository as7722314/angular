import { NgModule } from '@angular/core'
import { AuthService } from "./auth.service";
import { MessageService } from "./message.service";
import { UserService } from "./user.service";


@NgModule({
    providers: [
        AuthService,
        MessageService,
        UserService
    ]
})
export class ServiceModule { }