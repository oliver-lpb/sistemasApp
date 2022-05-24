import { Injectable } from '@angular/core';
//fire
import {AngularFireAuth} from '@angular/fire/compat/auth'
import firebase from 'firebase/compat/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tarjeta:string='32';
  constructor(private authFire:AngularFireAuth) { }
  registroTarjeta(tarjeta:string){
    this.tarjeta=tarjeta;
  }

//registrar usario
  async register(email:string,pass:string){
    try{
        return await this.authFire.createUserWithEmailAndPassword(email,pass);
    }catch(err){
        console.log(err)
        return null;
    }
  }
//login con corrreo y contrasenia 
  async login(email:string,pass:string){
    try{
        return await this.authFire.signInWithEmailAndPassword(email,pass);
    }catch(err){
        console.log(err)
        return null;
    }
  }
//login con google
  async loginWhitGoogle(email:string,pass:string){
    try{
        return await this.authFire.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }catch(err){
        console.log(err)
        return null;
    }
  }
//obtenerDatosdelUsario
  obternerUserLogin(){
    return this.authFire.authState;
  }
//cerrar sesion
  logOut(){
    this.authFire.signOut();
}

}
