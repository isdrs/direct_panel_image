import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-message-set',
  templateUrl: './survey-message-set.component.html',
  styleUrls: ['./survey-message-set.component.css']
})
export class SurveyMessageSetComponent implements OnInit {
  onSubmit(form: NgForm) {
    console.log(form);
  }

  constructor(private router: Router) { }

  ngOnInit() {
    const numberInput = document.getElementById('setTime');
    const invalidChars = [
      '-',
      '+',
      'e',
    ];
    numberInput.addEventListener('input', function () {
      (this as HTMLInputElement).value = (this as HTMLInputElement).value.replace(/[e\+\-]/gi, '');
    });
    numberInput.addEventListener('keydown', function (e) {
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });
  }

  charCounter() {
    const lng = (document.getElementById('surveyMessage') as HTMLInputElement).value;
    const show = document.getElementById('charCount').innerHTML = 'تعداد کاراکتر: ' + lng.length;
  }

  validateSurveyMessageSetForm() {
    const setSurveyMessageInput = document.forms['setSurveyMessagesForm']['setSurveyMessageInput'].value;
    if ( setSurveyMessageInput === '' ) {
      alert('لطفا متن پیام نظرسنجی را پر کنید');
      document.getElementById('surveyMessage').focus();
      return false;
    }

    const setTimeInput = document.forms['setSurveyMessagesForm']['setTimeInput'].value;
    if ( setTimeInput === '' ) {
      alert('لطفا زمانی برای ارسال مشخص کنید');
      document.getElementById('setTime').focus();
      return false;
    }

    const allInputs = document.getElementsByTagName('textarea').item[0].value;
    const allInputs2 = document.getElementsByTagName('input').item[0].value;
    if ( allInputs !== '' || allInputs2 !== '') {
      this.router.navigate(['loyalty-message-set']);
    }
  }
}
