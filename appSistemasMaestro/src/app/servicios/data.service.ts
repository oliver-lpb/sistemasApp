import { Injectable } from '@angular/core';
//fire base
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable, Subject } from 'rxjs';
import { anuncioModel } from '../model/anuncio.module';
import { cursoModel } from '../model/curso/curso.module';

//modelos


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firebase:AngularFirestore) { }

  guardarCurso(curso:cursoModel):Promise<any>{
    return this.firebase.collection('curso').add(curso);
  }
  
  guardaAnuncio(anuncio:anuncioModel):Promise<any>{
    return this.firebase.collection('anuncio').add(anuncio);
  }

  obtenerCurso(tarjeta:string):Observable<any>{
    return this.firebase.collection('curso', ref => ref.where( 'creadoPor','==',tarjeta)).snapshotChanges();
  }

  obtenerAnuncio(tarjeta:string):Observable<any>{
    return this.firebase.collection('anuncio', ref => ref.where('creadoPor','==',tarjeta)).snapshotChanges();
  }


}
