import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public res:any;
  public usersData:any;
  constructor(private fb: FormBuilder,private auth:AuthService,private router:Router) {
    if(this.auth.getLoggedIn() && this.auth.getLoggedIn() !=''){
      this.router.navigate(['home']);  
    }
    
    this.form = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email
      ]),      
      'password': new FormControl('', [
        Validators.required
      ])      
    });

  }
  ngOnInit() {
  }
  get f() { return this.form.controls; }
  onSubmit(){
    if (this.form.valid) {
      this.res = this.auth.login(this.form.value.email, this.form.value.password).subscribe(users => { 
        this.usersData = users; 
        if(this.usersData.token && this.usersData.token !=''){
          this.auth.setLoggedIn(this.usersData.token);
          this.router.navigate(['admin']);
        }else{
          alert('Email id and password does not match.');
        }
    });
    }    
  }
}
