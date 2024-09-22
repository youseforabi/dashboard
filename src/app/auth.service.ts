import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users = [

    {email : 'admin@test.com' , password : 'admin123' , role : 'Admin'},
    {email : 'doctor@test.com' , password : 'doctor123' , role : 'Doctor'},
    {email : 'dashboard@test.com' , password : 'dashboard123' , role : 'Dashboard'},

  ];

  private currentUser : any = null;

  login(email : string , password : string){
    const user = this.users.find( u => u.email == email && u.password == password );
    if (user){
      this.currentUser = user;
      return true;
    }
    return false;
  }

  getCurrentUser(){
    return this.currentUser;
  }

  logout(){
    this.currentUser = null;
  }

  constructor() { }
}
