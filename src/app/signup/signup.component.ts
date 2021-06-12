import {Component} from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms'
import { AuthService } from '../auth.service';
/** @title Form field with error messages */
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('', [Validators.required]);
  hide = true;
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  phone = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);

  userName:string; userPassword:string; userPhoneno: string; userEmail:string;

  constructor(private auth: AuthService) { }

  signupForm(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      this.auth.signupForm1(this.userName,this.userPassword, this.userEmail, this.userPhoneno).subscribe(data => {
        console.log(data)
      })
    }
  }
  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter email';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageUsername() {
    return this.username.hasError('required') ? 'You must enter username' : '';
  }

  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'You must enter password';
    }
    if (this.password.hasError('minlength')) {
      return 'password cannot be less than 8 characters';
    }
  }

  getErrorMessagePhone() {
    if (this.phone.hasError('required')) {
      return 'You must enter phone number';
    }
    if (this.phone.hasError('minlength')) {
      return 'phone number cannot be less than 10 digits';
    }
    if (this.phone.hasError('maxlength')) {
      return 'phone number cannot be greater than 10 digits';
    }
  }



  ngOnInit(): void {
  }



}



