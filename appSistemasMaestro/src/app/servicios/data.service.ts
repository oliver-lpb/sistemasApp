import { Injectable } from '@angular/core';
//fire base
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
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


}
