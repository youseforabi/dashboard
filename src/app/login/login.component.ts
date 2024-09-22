import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor( private authService : AuthService , private router : Router ){}

  login() {
    if (this.authService.login(this.email ,this.password)){
      const role = this.authService.getCurrentUser().role;
      this.router.navigate([`/${role.toLowerCase()}`]);

    }else{
      alert("Invalid Credintials")
    }
  }



}
