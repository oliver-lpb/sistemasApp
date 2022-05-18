import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { cursoModel } from 'src/app/model/curso/curso.module';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {
  
  form:FormGroup;

  constructor(private router:Router, private fb:FormBuilder,private dataServices:DataService) { 

    this.form = this.fb.group({
      
      nombre:['',Validators.required],
      creadoPor:['',[Validators.required]],
      seccion:['',[Validators.required]],
      materia:['',[Validators.required]],
      aula:['',[Validators.required]],
    });

  }

  ngOnInit(): void {
  }
  regresar(){
    this.router.navigate(['cursos']);
  }
  gaurdar(){
    const curso: cursoModel= {
      //null para que se registre de forma vacia
      nombre: this.form.value.nombre || null,
      creadoPor: this.form.value.creadoPor|| null,
      seccion: this.form.value.seccion|| null,
      materia: this.form.value.materia|| null,
      aula: this.form.value.aula || null,
      fechaCreacion: new Date|| null,
      
    }//captura entradas


      this.dataServices.guardarCurso(curso).then(()=>{
        this.form.reset();
      },error =>{
        console.log(error);
      })
    
  }
}
