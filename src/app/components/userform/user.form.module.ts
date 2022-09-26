import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { UserFormComponent } from "./user.form.component";

@NgModule({
    declarations: [UserFormComponent],
    imports: [
        CommonModule,
        FormsModule,

        MatFormFieldModule,
        MatInputModule,
    ],
    exports: [
        UserFormComponent
    ]
})
export class UserFormModule { }