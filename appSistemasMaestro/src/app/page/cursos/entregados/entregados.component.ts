import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { entregaTareaModel } from 'src/app/model/entregaTarea.model';
import { AuthService } from 'src/app/servicios/auth.service';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-entregados',
  templateUrl: './entregados.component.html',
  styleUrls: ['./entregados.component.css']
})
export class EntregadosComponent implements OnInit {
  
  buscador:string='';
  entregas:entregaTareaModel[]=[];

  tarjeta = this.auth.tarjeta;
  
  constructor(private auth:AuthService, private router:Router,private route:ActivatedRoute,private data:DataService) { }

  ngOnInit(): void {
    this.listaEntregados();
    
    this.buscador=this.route.snapshot.params['id'];

    console.log('se captura '+this.buscador)
  }

  listaEntregados(){
    
    this.data.getEntregados(this.buscador).subscribe(doc=>{
      
      this.entregas=[]
      doc.forEach((element:any)=>{
        this.entregas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
    console.log(this.entregas)
  }

}
