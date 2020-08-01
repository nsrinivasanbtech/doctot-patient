import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });

  ngOnInit(): void {
  }

  loginMe(){
    alert(this.loginForm.controls.username.value);
    alert(this.loginForm.controls.password.value);
    this.router.navigate(['/patient']);
  }
}
