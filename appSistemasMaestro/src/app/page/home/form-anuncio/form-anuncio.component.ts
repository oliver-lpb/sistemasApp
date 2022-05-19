import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { anuncioModel } from 'src/app/model/anuncio.module';
import { AuthService } from 'src/app/servicios/auth.service';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-form-anuncio',
  templateUrl: './form-anuncio.component.html',
  styleUrls: ['./form-anuncio.component.css']
})
export class FormAnuncioComponent implements OnInit {
  
  form:FormGroup;
  tarjeta = this.auth.tarjeta;
  router: any;

  constructor(private fb:FormBuilder,private dataServices:DataService, private auth:AuthService) {
    this.form = this.fb.group({
      titulo:['',Validators.required],
      descripcion:['',[Validators.required]],
    });
  }

  ngOnInit(): void {
  }


  @Output()
  enviar:EventEmitter<string>= new EventEmitter<string>();
  textoHijo:string='1';
  noAnucio(){
    this.enviar.emit(this.textoHijo);
  }

  guardar(){
    const curso: anuncioModel= {
      //null para que se registre de forma vacia
      titulo: this.form.value.titulo || null,
      creadoPor: this.tarjeta,
      descripcion: this.form.value.descripcion|| null,
      fechaCreacion: new Date|| null,
      grado: this.tarjeta,
      
    }//captura entradas


      this.dataServices.guardaAnuncio(curso).then(()=>{
        this.form.reset();
      },error =>{
        console.log(error);
      })
      this.enviar.emit(this.textoHijo);
  }


}
