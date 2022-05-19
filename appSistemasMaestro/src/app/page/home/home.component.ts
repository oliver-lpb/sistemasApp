import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { anuncioModel } from 'src/app/model/anuncio.module';
import { AuthService } from 'src/app/servicios/auth.service';
import { DataService } from 'src/app/servicios/data.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userLogget = this.auth.obternerUserLogin();
  tarjeta = this.auth.tarjeta;
  formAnuncio:boolean=false;
  clave:string='0';
  anuncios:anuncioModel[]=[];

  constructor(private auth:AuthService,private data:DataService) { }

  ngOnInit(): void {
    this.anuncio();
  }
  obtenerUsario(){
    this.auth.obternerUserLogin().subscribe(res=>{
      console.log(res?.email);
    })
  }

  

  nuevoAnuncio(){
    if(this.clave=='0'){
      this.formAnuncio=true
    }
  }
  recibir(mensaje:string){
    this.clave=mensaje;
    if(this.clave=='1'){
      this.formAnuncio=false;
      this.clave='0'
    }
  }

  anuncio(){
    this.data.obtenerAnuncio(this.tarjeta).subscribe(doc=>{
      this.anuncios=[]
      doc.forEach((element:any)=>{
        this.anuncios.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }

}
