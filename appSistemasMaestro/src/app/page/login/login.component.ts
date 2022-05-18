import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usario={
    tarjeta:'',
    email:'',
    pass:''
  }
  

  constructor(private authServices:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.logUp();
  }


  ingresar(){
    const{tarjeta,email,pass}= this.usario
    this.authServices.registroTarjeta(tarjeta);
    this.authServices.register(email,pass).then(res=>{
      this.router.navigate(['/home']);
      console.log(res);
    },error => {error})
  }

  ingresarGoogle(){
    const{email,pass}= this.usario
    this.authServices.loginWhitGoogle(email,pass).then(res=>{
      this.router.navigate(['/home']);
      console.log(res);
    },error => {error})
  }
  logUp(){
    this.authServices.logOut();
  }

}
