import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../Models/User';
import { AuthenticationService } from '../Services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  onSubmit(form: NgForm) {
    console.log(form);
  }

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {

  }


  validateLoginForm() {
    var userName = document.forms["FormLogin"]["usernameInput"].value;
    if (userName == "") {
      alert("لطفا نام کاربری خود را وارد کنید");
      return false;
    }
    if (userPass == "") {
      alert("لطفا گذرواژه خود را وارد کنید. طول گذرواژه باید بین 8 تا 16 کاراکتر باشد");
      return false;
    }

    var userPass = document.forms["FormLogin"]["passInput"].value;
    if (userPass.length <= 7) {
      alert("گذرواژه نباید کمتر از 8 کاراکتر باشد");
      return false;
    }
    if (userPass.length >= 17) {
      alert("گذرواژه نباید بیشتر از 16 کاراکتر باشد");
      return false;
    }

    if( userName == "admin" && userPass == "admin12345" ) {
      this.router.navigate(['dashboard-page']);
    }
  }

}
