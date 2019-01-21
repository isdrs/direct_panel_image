import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../Models/User';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-enter-phone',
  templateUrl: './enter-phone.component.html',
  styleUrls: ['./enter-phone.component.css']
})
export class EnterPhoneComponent implements OnInit {
  onSubmit(form: NgForm) {
    console.log(form);
  }

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    const numberInput = document.getElementById("verifyNum");
    const invalidChars = [
      "-",
      "+",
      "e",
    ];
    numberInput.addEventListener("input", function () {
      this.value = this.value.replace(/[e\+\-]/gi, "");
    });
    numberInput.addEventListener("keydown", function (e) {
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });

  }

  validateNumberInput(btn : number) {
    let numberInput = document.forms["sendUserNum"]["numValidate"].value;

    if (numberInput.length < 11) {
      alert("شماره تلفن باید 11 رقمی باشد");
      return false;
    }
    if (numberInput.length > 11) {
      alert("شماره تلفن باید 11 رقمی باشد");
      return false;
    }

    if (btn == 1)
      document.getElementById("loader").style.display = "block";

    let userNum = new User();
    userNum.phone = numberInput;
    this.authService.getVerifyCode(userNum).subscribe(
      Response => {

        if(btn == 1)
          document.getElementById("loader").style.display = "none";

        if((Response as any).status == 51 ){
          window.setTimeout(()=> alert("شما ابتدا باید ثبت نام اولیه را انجام دهید") , 100)
        }
      }
    );

  }

}
