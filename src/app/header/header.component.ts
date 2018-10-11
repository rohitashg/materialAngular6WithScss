import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn = true;
  constructor(private auth:AuthService,private router:Router) {
    if(this.auth.getLoggedIn() && this.auth.getLoggedIn() !=''){
      this.isLoggedIn = false;
    }
   }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('isLoggedIn');
    alert('You logged out!');
    this.router.navigate(['login']);
  }

}
