import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-material-form-demo',
  templateUrl: './material-form-demo.component.html',
  styleUrls: ['./material-form-demo.component.scss']
})
export class MaterialFormDemoComponent implements OnInit {
  maxDate = new Date();
  public department = [
    {"id":1,name:"It"},
    {"id":5,name:"PHP"},
    {"id":2,name:"Ruby on Rail"},
    {"id":3,name:"Python"},
    {"id":4,name:"Android"}
  ];
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
      'mobile': new FormControl('', [
        Validators.required,Validators.minLength(10),Validators.maxLength(10)
      ]),
      'city': new FormControl('', [
        Validators.required
      ]),
      'gender': new FormControl('1'),
      'department': new FormControl('0'),
      'hiredate': new FormControl('', [
        Validators.required
      ]),
      'isParmanent': new FormControl(false)
    });
}
ngOnInit() {
}

onClear() {
    return this.form.reset();
  }

}
