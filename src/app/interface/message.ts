import {
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

export interface Message {
    content: string,
    action: string,
    horizontal: MatSnackBarHorizontalPosition,
    vertical: MatSnackBarVerticalPosition
}