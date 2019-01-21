import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social-medias',
  templateUrl: './social-medias.component.html',
  styleUrls: ['./social-medias.component.css']
})
export class SocialMediasComponent implements OnInit {
  onSubmit(form: NgForm) {
    console.log(form);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  validateSocialMediasForm() {
    const telegramAddressInput = document.forms['socialMediasInfo']['telegramAddress'].value;
    if ( telegramAddressInput === '' ) {
      alert('لطفا لینک اکانت تلگرام خود را وارد کنید');
      document.getElementById('telegram').focus();
      return false;
    }
    const telegramAddressValidate = (document.getElementById('telegram') as HTMLInputElement).value;
    const addressPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    const telegramLinkValidationResult = telegramAddressValidate.match(addressPattern);
    if ( telegramLinkValidationResult == null ) {
      alert('لینک وارد شده برای تلگرام صحیح نمی باشد');
      document.getElementById('telegram').focus();
      (document.getElementById('telegram') as HTMLInputElement).value = '';
      return false;
    }

    const instaAddressInput = document.forms['socialMediasInfo']['instagramAddress'].value;
    if ( instaAddressInput === '' ) {
      alert('لطفا لینک اکانت اینستاگرام خود را وارد کنید');
      document.getElementById('instagram').focus();
      return false;
    }
    const instagramAddressValidate = (document.getElementById('instagram') as HTMLInputElement).value;
    // const addressPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    const instagramLinkValidationResult = instagramAddressValidate.match(addressPattern);
    if ( instagramLinkValidationResult == null ) {
      alert('لینک وارد شده برای اینستاگرام صحیح نمی باشد');
      document.getElementById('instagram').focus();
      (document.getElementById('instagram') as HTMLInputElement).value = '';
      return false;
    }

    const websiteAddressInput = document.forms['socialMediasInfo']['websiteAddress'].value;
    if ( websiteAddressInput === '' ) {
      alert('لطفا لینک وبسایت خود را وارد کنید');
      document.getElementById('website').focus();
      (document.getElementById('website') as HTMLInputElement).value = '';
      return false;
    }
    const websiteAddressValidate = (document.getElementById('website') as HTMLInputElement).value;
    // const addressPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    const websiteLinkValidationResult = websiteAddressValidate.match(addressPattern);
    if ( websiteLinkValidationResult == null ) {
      alert('لینک وارد شده برای وبسایت صحیح نمی باشد');
      document.getElementById('website').focus();
      return false;
    }

    const allInputs = document.getElementsByTagName('input').item[0].value;
    if ( allInputs !== '' ) {
      this.router.navigate(['welcome-message-set']);
    }
  }

}
