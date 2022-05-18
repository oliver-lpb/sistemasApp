import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//pantallas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { ErrorComponent } from './page/error/error.component';
import { CursosComponent } from './page/cursos/cursos.component';
import { CalificacionesComponent } from './page/calificaciones/calificaciones.component';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursoComponent } from './page/cursos/agregar-curso/agregar-curso.component';
//firebase
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

//formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';



const appRouters:Routes=[

  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'cursos',component:CursosComponent},
  {path:'notas',component:CalificacionesComponent},
  {path:'agregarcurso',component:AgregarCursoComponent},
  
  
  {path:'**',component:ErrorComponent}//debe de estar siempre de ultimo en la lista de rutas
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    CursosComponent,
    CalificacionesComponent,
    AgregarCursoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouters),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }