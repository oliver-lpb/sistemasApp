import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit {

  buscador:string='';
  tarjeta = this.auth.tarjeta;

  form:FormGroup;

  constructor(private auth:AuthService, private fb:FormBuilder,private router:Router,private route:ActivatedRoute,private data:DataService) { 
    this.form = this.fb.group({
      
      curso:['',Validators.required],
      titulo:['',[Validators.required]],
      creadoPor:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      fechaEntrega:['',[Validators.required]],
      fechaCreacion:['',[Validators.required]],
    });

  }

  ngOnInit(): void {
    this.buscador=this.route.snapshot.params['id'];
  }

  agregarCalif(){}



}
