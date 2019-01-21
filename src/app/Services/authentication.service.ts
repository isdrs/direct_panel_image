import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = "http://178.63.62.54:5170/api/";

  getVerifyCode(user: User) {

    var urlComplication = "user/getVerifyCode";
    var finalUrl = this.baseUrl + urlComplication; 

    var phone = user.phone;
    if(phone.startsWith("09")) {
      phone = "0098" + phone.substr(1);
    }

    
    return this.http.post(finalUrl, {phone:phone} ,{
      headers : {
        "Content-Type" : "application/json",
        "Platform" : "1",
        "App-Id": "3"
      }
    })
  }

  constructor(private http: HttpClient) {
    
  }
}
