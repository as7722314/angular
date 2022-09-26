import { OrderComponent } from './order.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { UserDialogModule } from './user/user.dialog.module';

@NgModule({
    declarations: [
        OrderComponent
    ],
    imports: [
        CommonModule,
        UserDialogModule,

        MatProgressSpinnerModule,
        MatTableModule,
        MatIconModule,
        MatPaginatorModule,
        MatButtonModule,
        MatSortModule,

    ]
})
export class OrderModule { }