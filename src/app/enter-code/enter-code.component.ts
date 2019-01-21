import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.component.html',
  styleUrls: ['./enter-code.component.css']
})
export class EnterCodeComponent implements OnInit {

  onSubmit(form: NgForm) {
    console.log(form);
  }
  constructor(private router: Router) { }

  ngOnInit() {

    const countDownDate = new Date().getTime() + (60 * 1000);

    const x = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById('setTimer').innerHTML = ' 0' + minutes + ' : ' + seconds;
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('setTimer').innerHTML = '00 : 00';
        document.getElementById('sendAgainBtn').removeAttribute('disabled');
        document.getElementById('loader').removeAttribute('class');
        document.getElementById('setTimer').style.display = 'none';
        document.getElementById('sendAgainBtn').style.display = 'block';

      }
    });

  }

  validateCodeInput() {
    const codeInput = document.forms['registerCode']['enterCodeInput'].value;
    if ( codeInput.length <= 3) {
      alert('کد احرازهویت باید دارای 4 کاراکتر باشد');
      return false;
    }

    const allInputs = document.getElementsByTagName('input').item[0].value;
    if ( allInputs !== '') {
      this.router.navigate(['device-info']);
    }
  }



}
