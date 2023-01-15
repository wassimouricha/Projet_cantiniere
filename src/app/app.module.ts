import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardweekComponent } from './components/cardweek/cardweek.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CarteComponent } from './components/carte/carte.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DialogConnexionComponent } from './components/dialog-connexion/dialog-connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { HttpClientModule }  from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CarteContenuComponent } from './carte-contenu/carte-contenu.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { AdminComponent } from './components/admin/admin.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardweekComponent,
    DialogContentComponent,
    CarteComponent,
    HomeComponent,
    DialogConnexionComponent,
    InscriptionComponent,
    CarteContenuComponent,
    UserAccountComponent,
    RequestResetComponent,
    ResponseResetComponent,
    GestionComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    // module pour faire des requetes à l'api rest
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {


}

