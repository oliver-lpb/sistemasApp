import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cursoModel } from 'src/app/model/curso/curso.module';
import { AuthService } from 'src/app/servicios/auth.service';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  tarjeta = this.auth.tarjeta;
  curso:cursoModel[]=[];

  constructor(private router:Router, private auth:AuthService, private data:DataService) { }

  ngOnInit(): void {
    this.listaCursos();
  }

  agregaCurso(){
    this.router.navigate(['agregarcurso']);
  }

  listaCursos(){
    this.data.obtenerCurso(this.tarjeta);
    this.data.obtenerCurso(this.tarjeta).subscribe(doc=>{
      this.curso=[]
      doc.forEach((element:any)=>{
        this.curso.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })

  }

}
