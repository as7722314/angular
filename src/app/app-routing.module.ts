import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { ContainerComponent } from './container/container.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderComponent } from './order/order.component';
import { LoginPageGuard } from './auth/login.page.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginPageGuard] },
  {
    path: '', component: ContainerComponent, children: [
      {
        path: 'profile', 
        canActivate: [AuthGuard], 
        component: ProfileComponent
      },
      {
        path: 'order', 
        canActivate: [AuthGuard], 
        component: OrderComponent
      },
    ]
  },

  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
