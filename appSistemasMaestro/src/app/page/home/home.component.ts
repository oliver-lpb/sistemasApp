import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userLogget = this.auth.obternerUserLogin();
  tarjeta = this.auth.tarjeta;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  obtenerUsario(){
    this.auth.obternerUserLogin().subscribe(res=>{
      console.log(res?.email);
    })
  }
}
