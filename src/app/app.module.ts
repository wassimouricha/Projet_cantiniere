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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardweekComponent,
    DialogContentComponent,
    CarteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
