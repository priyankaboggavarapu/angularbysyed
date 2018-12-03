import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../providers/http.provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: any
  showErrors: any;
  constructor(private httpSvc: HttpClientService, private route: Router) {
    this.login = {
      userName: '',
      password: ''
    }
  }

  loginUser() {
    this.showErrors = false;
    this.httpSvc.loginUser(this.login)
      .subscribe((resp: any) => {
        console.log(resp);
        if (resp.token) {
          localStorage.setItem('token', resp.token);
          this.route.navigateByUrl('products');
          this.httpSvc.loginStatus.next({
            firstName: resp.data.firstName,
            lastName: resp.data.lastName,
            isLoggedIn: true
          });
        }
        else {
          this.showErrors = true;
        }
      },
        (err) => {
          console.log(err);

        });
  }

}
