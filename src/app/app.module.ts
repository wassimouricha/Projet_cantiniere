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



const appRoute: Routes = [
  {path: '', redirectTo:'Home', pathMatch:'full' },
  {path: 'Home', component: HomeComponent},
  {path: 'Cartes', component: CarteComponent},
  {path: 'Inscription', component: InscriptionComponent},
]

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
    // pour les routes
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

export class ApiService {
  API_KEY = '';
}

