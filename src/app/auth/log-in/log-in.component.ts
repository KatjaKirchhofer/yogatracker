import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../user.modul';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators: [Validators.required]})
    })

  }
  onSubmit() {
    console.log(this.loginForm)
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    })

  }

}
