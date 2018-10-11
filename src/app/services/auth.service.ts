import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers = new HttpHeaders();
  private requestData:any;
  public isLoggedIn:any;  
  constructor(private http:HttpClient) {
      this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }
  setLoggedIn(token){
    this.isLoggedIn = token;
    localStorage.setItem('isLoggedIn',token);    
  }

  getLoggedIn(){
    return localStorage.getItem('isLoggedIn');
  }

  login(email,password){
    // post these detail to HTTP API server and return user info    
    this.requestData = {
      'email': email,
      'password': password
    };
    return this.http.post('https://reqres.in/api/login', this.requestData, { headers: this.headers });
  }
}
 