import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-pass-page',
  templateUrl: './new-pass-page.component.html',
  styleUrls: ['./new-pass-page.component.css']
})
export class NewPassPageComponent implements OnInit {

  onSubmit(form: NgForm) {
    console.log(form);
  }
  constructor() { }

  ngOnInit() {
  }

  validateNumberInput() {
    const confirmCodeValidate = document.forms['changePasswordForm']['confirmCodeInput'].value;
    const newPassvalidate = document.forms['changePasswordForm']['newPassInput'].value;
    const confirmPassValidate = document.forms['changePasswordForm']['confirmPassInput'].value;

    if ( confirmCodeValidate === '' ) {
      alert('لطفا کد تایید را وارد کنید');
      document.getElementById('confirmCode').focus();
      return false;
    }
    if ( confirmCodeValidate.length >= 5 ) {
      alert('کد تایید باید 4 کاراکتر داشته باشد');
      (document.getElementById('confirmCode') as HTMLInputElement).value = '';
      document.getElementById('confirmCode').focus();
      return false;
    }
    if ( confirmCodeValidate.length <= 3 ) {
      alert('کد تایید باید 4 کاراکتر داشته باشد');
      (document.getElementById('confirmCode') as HTMLInputElement).value = '';
      document.getElementById('confirmCode').focus();
      return false;
    }

    if ( newPassvalidate === '' ) {
      alert('لطفا گذرواژه جدید خود را وارد کنید');
      document.getElementById('newPass').focus();
      return false;
    }

    if ( confirmPassValidate === '' ) {
      alert('لطفا فیلد تایید گذرواژه را کامل کنید');
      document.getElementById('confirmPass').focus();
      return false;
    }

    if ( newPassvalidate !== confirmPassValidate ) {
      alert('گذرواژه جدید با فیلد تایید گذرواژه همخوانی ندارند');
      (document.getElementById('newPass') as HTMLInputElement).value = '';
      (document.getElementById('confirmPass') as HTMLInputElement).value = '';
      document.getElementById('newPass').focus();
      return false;
    }
  }
}
