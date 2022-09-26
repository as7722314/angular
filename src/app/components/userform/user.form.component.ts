import { Component, Input } from '@angular/core';

class UserForm {
  name!: string;
  email!: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user.form.component.html',
  styleUrls: ['./user.form.component.css']
})
export class UserFormComponent {
  // @Input() name?: string;
  // @Input() email?: string;
  
  @Input() user = new UserForm()
  // user = new UserForm();
  // name: string = 'Test';
  // email: string = 'test@gmail.com';
  constructor() { }
}
