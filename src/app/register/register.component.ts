import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'fullname': new FormControl('', [
        Validators.required
      ]),
      'password': new FormControl('', [
        Validators.required
      ]),
      'isAgree': new FormControl(true,[
        Validators.requiredTrue
      ])
    });
  }
  ngOnInit() {
  }
  onClear() {
    return this.form.reset();
  }

}
