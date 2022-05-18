import { Component } from '@angular/core';
import { AuthService } from './servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appSistemasMaestro';


  userLogget = this.auth.obternerUserLogin();
  constructor(private auth:AuthService){}

  obtenerUsario(){
    this.auth.obternerUserLogin().subscribe(res=>{
      console.log(res?.email);
    })
  }
}
