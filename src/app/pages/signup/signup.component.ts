import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userDate: FormGroup;

  constructor() {
    this.userDate = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  
}
