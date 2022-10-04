import { Component } from '@angular/core';

// voici comment se compose un component

@Component({
  // son nom
  selector: 'app-root',
  // son fichier html
  templateUrl: './app.component.html',
  // son fichier css
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projet Cantinière dev branch';
}
