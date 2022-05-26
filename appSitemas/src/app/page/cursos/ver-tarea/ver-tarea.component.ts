import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cursoModel } from 'src/app/model/curso.model';
import { tareaModel } from 'src/app/model/tarea.model';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-ver-tarea',
  templateUrl: './ver-tarea.component.html',
  styleUrls: ['./ver-tarea.component.css']
})
export class VerTareaComponent implements OnInit {
  
  indice:string='';
  tarea:tareaModel[]=[];
  tarjeta = this.auth.tarjeta;
  
  constructor(private auth:AuthService,private router:Router,private route:ActivatedRoute,private data:DataService) { }

  ngOnInit(): void {
    this.indice=this.route.snapshot.params['id'];
    this.listaCursos();
  }

  listaCursos(){
    
    this.data.obtenerTarea(this.tarjeta,this.indice).subscribe(doc=>{
      this.tarea=[]
      doc.forEach((element:any)=>{
        this.tarea.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }

}
