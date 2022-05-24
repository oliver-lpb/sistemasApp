import { Injectable } from '@angular/core';
//fire base
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable, Subject } from 'rxjs';
import { anuncioModel } from '../model/anuncio.module';
import { cursoModel } from '../model/curso/curso.module';
import { tareaModel } from '../model/tarea.model';

//modelos


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firebase:AngularFirestore) { }

  cursos:cursoModel[]=[];
//cursos.,...........................................................................................................................

  guardarCurso(curso:cursoModel):Promise<any>{
    return this.firebase.collection('curso').add(curso);
  }
  
  
  obtenerCurso(tarjeta:string):Observable<any>{
    return this.firebase.collection('curso', ref => ref.where( 'creadoPor','==',tarjeta)).snapshotChanges();
  }
  
  encontrarCurso(curso:string):Observable<any>{
    return this.firebase.collection('curso', ref => ref.where('nombre','==',curso)).snapshotChanges();
  }

//tareas.,...........................................................................................................................

  guardaTarea(Nuevatarea:tareaModel):Promise<any>{
    return this.firebase.collection('tareas').add(Nuevatarea);
  }

//anuncios...........................................................................................................................
  guardaAnuncio(anuncio:anuncioModel):Promise<any>{
    return this.firebase.collection('anuncio').add(anuncio);
  }  
  obtenerAnuncio(tarjeta:string):Observable<any>{
      return this.firebase.collection('anuncio', ref => ref.where('creadoPor','==',tarjeta)).snapshotChanges();
  }


}
