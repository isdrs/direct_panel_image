import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loyalty-message-set',
  templateUrl: './loyalty-message-set.component.html',
  styleUrls: ['./loyalty-message-set.component.css']
})
export class LoyaltyMessageSetComponent implements OnInit {
  onSubmit(form: NgForm) {
    console.log(form);
  }

  constructor(private router: Router) { }

  ngOnInit() {
    const numberInput = document.getElementById("setTime");
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

  charCounter() {
    const lng = document.getElementById("loyaltyMessageSet").value;
    const show = document.getElementById("charCount").innerHTML = "تعداد کاراکتر: " + lng.length;
  }

  validateLoyaltyMessageSetForm() {
    const loyaltyMessageSetInput = document.forms["loyaltyMessageSetForm"]["setLoyaltyMessageInput"].value;
    if( loyaltyMessageSetInput == "" ) {
      alert("لطفا متن پیام وفاداری را وارد کنید");
      document.getElementById("loyaltyMessageSet").focus();
      return false;
    }

    const setTimeInput = document.forms["loyaltyMessageSetForm"]["setTimeInput"].value;
    if( setTimeInput == "" ) {
      alert("لطفا تعداد دفعات حضور مشتری را مشخص کنید");
      document.getElementById("setTime").focus();
      return false;
    }

    const allInputs = document.getElementsByTagName("textarea").value;
    const allInputs2 = document.getElementsByTagName("input").value;
    if( allInputs != "" || allInputs2 != "" ) {
      this.router.navigate(['dashboard-page']);
    }
  }
}
