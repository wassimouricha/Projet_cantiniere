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



const appRoute: Routes = [
  {path: '', redirectTo:'Home', pathMatch:'full' },
  {path: 'Home', component: HomeComponent},
  {path: 'Cartes', component: CarteComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardweekComponent,
    DialogContentComponent,
    CarteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    // pour les routes
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
