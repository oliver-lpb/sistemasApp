import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { califcModel } from 'src/app/model/calificacion.model';
import { cursoModel } from 'src/app/model/curso.model';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  
  tarjeta = this.auth.tarjeta;
  nombreCurso:string='';
  curso:califcModel[]=[];
  
  
  constructor(private router:Router, private auth:AuthService, private data:DataService) { }

  ngOnInit(): void {
    this.listaCursos();

  }
  listaCursos(){
    
    this.data.obtienePunteo(this.tarjeta).subscribe(doc=>{
      this.curso=[]
      doc.forEach((element:any)=>{
        this.curso.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      
    })
    console.log(this.curso)
  }
}
