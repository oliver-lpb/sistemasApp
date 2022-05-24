import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { entregaTareaModel } from 'src/app/model/entregaTarea.model';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-entregar-tarea',
  templateUrl: './entregar-tarea.component.html',
  styleUrls: ['./entregar-tarea.component.css']
})
export class EntregarTareaComponent implements OnInit {
  indice:string='';
  tarjetaindice:string='';

  form:FormGroup;
  tarjeta = this.auth.tarjeta;
  
  constructor(private auth:AuthService,private fb:FormBuilder,private router:Router,private route:ActivatedRoute,private data:DataService) { 

    this.form = this.fb.group({
      tarea:['',Validators.required],
      descripcion:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.indice=this.route.snapshot.params['id'];
    this.tarjetaindice=this.route.snapshot.params['targ'];
  }

  guardaTarea(){
    const curso: entregaTareaModel= {
      //null para que se registre de forma vacia
      cursoId: this.indice,
      creadoPor: this.tarjetaindice,
      tarea: this.form.value.tarea,
      fechaCreacion: new Date,
      descripcion: this.form.value.descripcion
      
    }//captura entradas
      this.data.guardarTarea(curso).then(()=>{
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
