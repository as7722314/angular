import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoginPageGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {

        if (sessionStorage.getItem('token')) {
            return this.router.parseUrl('/profile');
        }
        return true;
    }
}
