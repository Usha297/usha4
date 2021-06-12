import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface signupResponse {
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signupForm1(userName, userPassword, userEmail, userPhoneno) {
    return this.http.post<signupResponse>('/api/signup', {
      userName, userPassword, userEmail, userPhoneno
    })
  }

  /*loginForm1 (form) {
    if (form.invalid) {
      return;
    } else {
      if (this.useremail=='praveenpol99@gmail.com' && this.userpassword=='praveen302') {
      } else {

      }
    }
  }*/
}
