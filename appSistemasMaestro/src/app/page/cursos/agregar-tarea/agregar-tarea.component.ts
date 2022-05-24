import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tareaModel } from 'src/app/model/tarea.model';
import { AuthService } from 'src/app/servicios/auth.service';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.css']
})
export class AgregarTareaComponent implements OnInit {
  
  indice:string='';
  form:FormGroup;
  tarjeta = this.auth.tarjeta;

  constructor(private auth:AuthService,private fb:FormBuilder, private router:Router,private route:ActivatedRoute,private data:DataService) { 

    this.form = this.fb.group({
      
      curso:['',Validators.required],
      titulo:['',[Validators.required]],
      creadoPor:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      fechaEntrega:['',[Validators.required]],
      fechaCreacion:['',[Validators.required]],
    });

  }

  agregarTarea(){
    const curso: tareaModel= {
      //null para que se registre de forma vacia
      curso: this.indice,
      titulo: this.form.value.titulo,
      creadoPor: this.tarjeta,
      descripcion: this.form.value.descripcion|| null,
      fechaEntrega: this.form.value.fechaEntrega|| null,
      fechaCreacion: new Date|| null,
    }//captura entradas
      this.data.guardaTarea(curso).then(()=>{
        this.form.reset();
      },error =>{
        console.log(error);
      })
      this.router.navigate(['cursos']);
  }

  regresar(){
    this.router.navigate(['cursos']);
  }

  ngOnInit(): void {

    this.indice=this.route.snapshot.params['id'];
  }

}
