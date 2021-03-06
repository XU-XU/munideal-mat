import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }

}
