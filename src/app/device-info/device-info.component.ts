import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.css']
})
export class DeviceInfoComponent implements OnInit {
  value: any;
  onSubmit(form: NgForm) {
    console.log(form);
  }
  constructor(private router: Router) { }

  ngOnInit() {
    const numberInput = document.getElementById('deviceSerialNumber');
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

  validateDeviceInfoForm() {
    const deviceSerialNum = document.forms['deviceInfoForm']['deviceSerialNumberInput'].value;
    if ( deviceSerialNum === '' ) {
      alert('لطفا شماره سریال دستگاه را وارد کنید');
      document.getElementById('deviceSerialNumber').focus();
      return false;
    }
    if ( deviceSerialNum.length >= 6 || deviceSerialNum.length <= 4 ) {
      alert('شماره سریال دستگاه باید 5 رقمی باشد');
      document.getElementById('deviceSerialNumber').focus();
      (document.getElementById('deviceSerialNumber') as HTMLInputElement).value = '';
      return false;
    }

    const deviceMac = document.forms['deviceInfoForm']['deviceMacAddressInput'].value;
    if ( deviceMac === '' ) {
      alert('لطفا شناسه دستگاه را وارد کنید');
      document.getElementById('deviceMacAddress').focus();
      return false;
    }
    if ( deviceMac.length >= 6 || deviceMac.length <= 4 ) {
      alert('شناسه دستگاه باید 5 رقمی باشد');
      document.getElementById('deviceMacAddress').focus();
      (document.getElementById('deviceMacAddress')as HTMLInputElement).value = '';
      return false;
    }

    const allInputs = document.getElementsByTagName('input').item[0].value;
    if ( allInputs !== '' ) {
      this.router.navigate(['tutorial-video']);
    }
  }
}
