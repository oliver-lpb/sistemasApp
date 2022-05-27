import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { entregaTareaModel } from '../model/entregaTarea.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firebase:AngularFirestore) { }

//guardaTarea..........................................................................................................................

  guardarTarea(tarea:entregaTareaModel):Promise<any>{
    return this.firebase.collection('tareaEntregadas').add(tarea);
  }

//obtieneCursos..........................................................................................................................
  obtenerCurso(tarjeta:string):Observable<any>{
    return this.firebase.collection('curso', ref => ref.where( 'creadoPor','==',tarjeta)).snapshotChanges();
  }

//obtieneTarea..........................................................................................................................
  obtenerTarea(tarjeta:string,indice:string):Observable<any>{
    return this.firebase.collection('tareas', ref => ref.where( 'creadoPor','==',tarjeta).where('curso','==',indice)).snapshotChanges();
  }

  obtienePunteo(tarjeta:string):Observable<any>{
    return this.firebase.collection('calificacion', ref => ref.where( 'creadoPor','==',tarjeta)).snapshotChanges();
  }
  
//obtieneAnuncio..........................................................................................................................
  obtenerAnuncio(tarjeta:string):Observable<any>{
    return this.firebase.collection('anuncio', ref => ref.where('creadoPor','==',tarjeta)).snapshotChanges();
  } 
}
