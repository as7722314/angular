import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { MessageService } from 'src/services/message.service';
import { Message } from '../interface/message';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  message: Message = {
    action: "Close",
    content: "Success",
    horizontal: 'right',
    vertical: 'top'
  };

  constructor(private router: Router, private messageService: MessageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {

    if (state.url == '/login') {
      if (sessionStorage.getItem('token')) {
        this.router.parseUrl('/profile');
      }
      return true;
    }

    if (!sessionStorage.getItem('token')) {
      this.message.content = "No Aermission To Activate";
      this.messageService.show(this.message);
      return this.router.parseUrl('/login');
    }
    return true;
  }
}
