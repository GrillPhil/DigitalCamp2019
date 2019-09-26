import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = new FormControl('');
  password = new FormControl('');
  error: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.username.value === 'philipp' && this.password.value === 'test') {
      this.router.navigate(['dashboard']);
    } else {
      this.error = 'Benutzername oder Passwort falsch.';
    }
  }
}
