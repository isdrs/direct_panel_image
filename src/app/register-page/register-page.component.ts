import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { renderTemplate } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  onSubmit(form: NgForm) {
    console.log(form);
  }

  constructor(private router: Router) { }

  ngOnInit() {
    const numberInput = document.getElementById("userPhoneNum");
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

  showBox() {
    const buyType = document.getElementById("buyKind").value;
    if( buyType == "marketer" ) {
      document.getElementById("marketerCodeContainer").style.display = "block";
    }
    else if( buyType == "digikala") {
      document.getElementById("marketerCodeContainer").style.display = "none";
    }
  }

  validateRegisterForm() {   
    const firstName = document.forms["FormRegister"]["firstNameInput"].value;

    if (firstName == "") {
      alert("لطفا نام خود را وارد کنید");
      document.getElementById("firstName").focus();
      return false;
    }
    else if (firstName.length < 3) {
      alert("نام نمی تواند کمتر از 3 کاراکتر باشد");
      return false;
    }

    const lastName = document.forms["FormRegister"]["lastNameInput"].value;
    if (lastName == "") {
      alert("لطفا نام خانوادگی خود را وارد کنید");
      document.getElementById("lastName").focus();
      return false;
    }
    else if (lastName <= 3) {
      alert("نام خانوادگی نمی تواند کمتر از 3 کاراکتر باشد")
    }

    const phoneNum = document.forms["FormRegister"]["phoneInput"].value;
    if (phoneNum == "") {
      alert("لطفا شماره تلفن همراه خود را وارد کنید");
      document.getElementById("userPhoneNum").focus();
      return false;
    }
    let phoneNumber = document.getElementById("userPhoneNum").value;
    let numberPattern = /^09/g;
    let numValidateResult = phoneNumber.match(numberPattern);
    if (numValidateResult == null ) {
      alert("شماره ای که وارد کرده اید صحیح نمی باشد");
      document.getElementById("userPhoneNum").value = "";
      document.getElementById("userPhoneNum").focus();
      return false;
    }
    if( phoneNumber.length <= 10 || phoneNumber.length >= 12 ) {
      alert("شماره تلفن باید 11 رقمی باشد");
      document.getElementById("userPhoneNum").value = "";
      document.getElementById("userPhoneNum").focus();
      return false;
    }

    const email = document.forms["FormRegister"]["emailInput"].value;
    if (email == "") {
      alert("لطفا ایمیل خود را وارد کنید");
      document.getElementById("userEmail").focus();
      return false;
    }
    const emailValidate = document.getElementById("userEmail").value;
    const emailPattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{1,4})+$/;
    const emailResult = emailValidate.match(emailPattern);
    if( emailResult == null ) {
      alert("ایمیلی که وارد کرده اید صحیح نمی باشد");
      document.getElementById("userEmail").focus();
      return false;
    }

    const passwordInput = document.forms["FormRegister"]["passwordInput"].value;
    if( passwordInput == "" ) {
      alert("لطفا فیلد گذرواژه را پر کنید");
      document.getElementById("userPassword").focus();
      return false;
    }
    if( passwordInput.length <= 7 || passwordInput.length >= 17) {
      alert("طول گذرواژه باید بین 8 تا 16 کاراکتر باشد");
      document.getElementById("userPassword").focus();
      document.getElementById("userPassword").value = "";
      return false;
    }

    const passwordRepeatInput = document.forms["FormRegister"]["passwordRepeatInput"].value;
    if( passwordRepeatInput == "" ) {
      alert("لطفا فیلد تکرار گذرواژه را پر کنید");
      document.getElementById("userPasswordConfirm").focus();
      return false;
    }
    if( passwordRepeatInput !== passwordInput ) {
      alert("گذرواژه هایی که وارد کرده اید با یکدیگر همخوانی ندارند");
      document.getElementById("userPassword").focus();
      document.getElementById("userPassword").value = "";
      document.getElementById("userPasswordConfirm").value = "";      
      return false;
    }

    const province = document.forms["FormRegister"]["provinceInput"].value;
    if (province == "") {
      alert("لطفا استان خود را وارد کنید");
      document.getElementById("userProvince").focus();
      return false;
    }

    const city = document.forms["FormRegister"]["cityInput"].value;
    if (city == "") {
      alert("لطفا شهر خود را وارد کنید");
      document.getElementById("userCity").focus();
      return false;
    }

    const jobKind = document.forms["FormRegister"]["jobKindInput"].value;
    if (jobKind == "") {
      alert("لطفا نوع شغل را وارد کنید");
      document.getElementById("userJobKind").focus();
      return false;
    }

    const jobTitle = document.forms["FormRegister"]["jobTitleInput"].value;
    if (jobTitle == "") {
      alert("لطفا عنوان شغل خود را وارد کنید");
      document.getElementById("userJobTitle").focus();
      return false;
    }
    
    const buyKind = document.forms["FormRegister"]["buyKindInput"].value;
    if (buyKind == "") {
      alert("لطفا نوع خرید خود را وارد کنید");
      document.getElementById("buyKind").focus();
      return false;
    }
    
    const allowedAlert = document.getElementById("marketerCodeContainer").style.display;
    if( allowedAlert == "block" ) {
      const marketerCode = document.forms["FormRegister"]["marketerCodeInput"].value;
      if (marketerCode == "") {
        alert("لطفا کد بازاریاب را وارد کنید");
        document.getElementById("marketerCode").focus();
        return false;
      }
    }

    const address = document.forms["FormRegister"]["addressInput"].value;
    if (address == "") {
      alert("لطفا آدرس خود را وارد کنید");
      document.getElementById("userAddress").focus();
      return false;
    }

    ///// This is just for test. /////
    const inputts = document.getElementsByTagName("input").value;
    if( inputts != "" ) {
      this.router.navigate(['enter-code']);
    }

  }


}