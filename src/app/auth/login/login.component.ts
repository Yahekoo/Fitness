import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm :any ;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl('',{
        validators : [Validators.required,Validators.email]
      }),
      password : new FormControl('',{
        validators : [Validators.required]
      })
    })

  }

  onSubmit(){

  }

}
