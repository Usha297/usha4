import {Component} from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms'
import { Router } from '@angular/router';

/** @title Form field with error messages */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  useremail:string; userpassword:string;

  constructor(private router: Router) {

  }

  loginForm(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      if (this.useremail=='savita@gmail.com' && this.userpassword=='s@123456') {
        this.router.navigate(['/dashboard'])
      } else {
        alert('invalid credentials')
      }
    }
  }
  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter email';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'You must enter password';
    }
    if (this.password.hasError('minlength')) {
      return 'password cannot be less than 8 characters';
    }
  }



  ngOnInit(): void {
  }

}



