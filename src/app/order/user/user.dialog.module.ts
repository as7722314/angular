import { NgModule } from '@angular/core';
import { UserDialogComponent } from './user.dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [UserDialogComponent],
    imports: [
        MatButtonModule,
        MatCardModule
    ]
})
export class UserDialogModule { }