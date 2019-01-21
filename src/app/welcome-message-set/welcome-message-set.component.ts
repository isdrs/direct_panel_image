import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-message-set',
  templateUrl: './welcome-message-set.component.html',
  styleUrls: ['./welcome-message-set.component.css']
})
export class WelcomeMessageSetComponent implements OnInit {
  onSubmit(form: NgForm) {
    console.log(form);
  }
  constructor(private router: Router) { }

  ngOnInit() {


  }


  charCounter() {
    const lng1 = (document.getElementById('welcomeMessage') as HTMLInputElement).value;
    const show1 = document.getElementById('charCount').innerHTML = 'تعداد کاراکتر: ' + lng1.length;
  }

  textCounter() {
    const lng2 = (document.getElementById('repeatBuyMessage') as HTMLInputElement).value;
    const show2 = document.getElementById('textCount').innerHTML = 'تعداد کاراکتر: ' + lng2.length;
  }


  validateSocialMediasForm() {
    const welcomeMessageInput = document.forms['setMessages']['setWelcomeMessage'].value;
    if ( welcomeMessageInput === '' ) {
      alert('لطفا متن پیام خوش آمدگویی را وارد کنید');
      document.getElementById('welcomeMessage').focus();
      return false;
    }

    const repeatBuyMessageInput = document.forms['setMessages']['setRepeatBuyMessage'].value;
    if (  repeatBuyMessageInput === '' ) {
      alert('لطفا متن پیام تکرار خرید را وارد کنید');
      document.getElementById('repeatBuyMessage').focus();
      return false;
    }

    const allInputs = document.getElementsByTagName('input').item[0].value;
    if ( allInputs !== '' ) {
      this.router.navigate(['survey-message-set']);
    }
  }
}
