import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UserDto } from '../dto/UserDto';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = new UserDto();
  constructor(
    private authService: AuthService,
  ) { }

  async ngOnInit() {
    this.getUserProfile();
  }

  async getUserProfile() {
    const res = await firstValueFrom(this.authService.getAuthUser());
    this.authService.setUserInfo(res.data);
    this.user.id = res.data.id;
    this.user.name = res.data.name;
    this.user.email = res.data.email;
  }
}
