import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './page/error/error.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { CursosComponent } from './page/cursos/cursos.component';
import { NotasComponent } from './page/notas/notas.component';
//firebase
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//formulario
import { HttpClientModule} from '@angular/common/http';
import { FormAnuncioComponent } from './page/home/form-anuncio/form-anuncio.component';
import { VerTareaComponent } from './page/cursos/ver-tarea/ver-tarea.component';
import { EntregarTareaComponent } from './page/cursos/entregar-tarea/entregar-tarea.component';

const appRouters:Routes=[

  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'cursos',component:CursosComponent},
  {path:'notas',component:NotasComponent},
  {path:'tarea/:id',component:VerTareaComponent},
  {path:'entrega/:id/:targ',component:EntregarTareaComponent},
  
  {path:'**',component:ErrorComponent}//debe de estar siempre de ultimo en la lista de rutas
];

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent,
    NotasComponent,
    FormAnuncioComponent,
    VerTareaComponent,
    EntregarTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouters),
    //firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireAuthModule,
    //form
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
