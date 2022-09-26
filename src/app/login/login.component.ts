import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

import { LoginForm } from '../dto/LoginForm';
import { Message } from '../interface/message';

import { AuthService } from 'src/services/auth.service';
import { LoginService } from './login.service';
import { MessageService } from 'src/services/message.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginForm, LoginService],
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  submitted = false;
  hide = true;
  message: Message = {
    action: "Close",
    content: "Success",
    horizontal: 'right',
    vertical: 'top'
  };

  constructor(
    private router: Router,
    private loginService: LoginService,
    private authService: AuthService,
    private messageService: MessageService,
    public loginForm: LoginForm
  ) { }

  ngOnInit(): void { }

  async onSubmit() {
    this.submitted = true;
    const res = await firstValueFrom(this.loginService.login(this.loginForm))
    if (res.token) {
      this.authService.setUserInfo(res);
      sessionStorage.setItem('token', res.token);
      this.message.content = `歡迎 ${res.name} 登入系統 `
      this.messageService.show(this.message);
      this.router.navigate(['/profile']);
    }
    this.submitted = false;
  }
}
