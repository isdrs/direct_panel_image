import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navigationCancelingError } from '@angular/router/src/shared';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  constructor( private router : Router) {

    
   }

  ngOnInit() {

    // // localStorage.setItem("","");
    // // localStorage.getItem("")
    // let loggedIn = false
    // if(!loggedIn) {

    //   this.router.navigate(['login-page'])
      
    // }

  }

}
