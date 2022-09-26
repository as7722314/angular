import { Component, OnInit } from '@angular/core';
import { INavData } from '@coreui/angular';
import { freeSet } from '@coreui/icons/js/free';
import { Router } from '@angular/router';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  navItems: INavData[] = [];
  visible: boolean = false;
  icons = freeSet;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initNavItems();
  }

  initNavItems() {
    this.navItems = [
      // {
      //   name: "Login",
      //   url: "/login",
      // },
      {
        name: "Profile",
        url: "/profile",
      },
      {
        name: "Order",
        url: "/order",
      }
    ]
  }

  visibleChange() {
    this.visible = !this.visible
  }
  
  Logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
