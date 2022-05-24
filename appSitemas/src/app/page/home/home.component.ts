import { Component, OnInit } from '@angular/core';
import { anuncioModel } from 'src/app/model/anuncio.model';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  anuncios:anuncioModel[]=[];
  tarjeta = this.auth.tarjeta;
  constructor(private auth:AuthService,private data:DataService) { }

  ngOnInit(): void {
    this.anuncio();
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
