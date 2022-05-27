import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { califcModel } from 'src/app/model/calificacion.model';

import { AuthService } from 'src/app/servicios/auth.service';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit {

  buscador:string='';
  buscadorCursoId:string='';
  tarjeta = this.auth.tarjeta;

  form:FormGroup;

  constructor(private auth:AuthService, private fb:FormBuilder,private router:Router,private route:ActivatedRoute,private data:DataService) { 
    this.form = this.fb.group({
      
      punteo:['',Validators.required],
      comentario:['',[Validators.required]],
      creadoPor:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      fechaEntrega:['',[Validators.required]],
      fechaCreacion:['',[Validators.required]],
    });

  }

  ngOnInit(): void {
    this.buscador=this.route.snapshot.params['id'];
    this.buscadorCursoId=this.route.snapshot.params['cursoId'];
    
  }

  agregarCalif(){
    const tarea: califcModel= {
      //null para que se registre de forma vacia
      cursoId: this.buscadorCursoId,
      tarea: this.buscador,
      creadoPor: this.tarjeta,
      fechaCreacion: new Date|| null,
      comentario: this.form.value.comentario|| null,
      punteo:this.form.value.punteo || null,
      
    }//captura entradas
      this.data.guardaCalidicacion(tarea).then(()=>{
        this.form.reset();
      },error =>{
        console.log(error);
      })
      this.router.navigate(['cursos']);
  }

  regresar(){
    this.router.navigate(['cursos']);
  }


}
