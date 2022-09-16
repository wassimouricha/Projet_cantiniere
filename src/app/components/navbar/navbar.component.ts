import { Component, OnInit, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faBars, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { DialogConnexionComponent } from '../dialog-connexion/dialog-connexion.component';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';


declare function togglebutton():any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // je crée une variable pour l'icone fabars pouvant etre appelé dans le html 
  bars = faBars;
  cart = faCartShopping;

  constructor(public dialog: MatDialog) { 
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogConnexionComponent, {
      data: { title: 'Connexion'}
    });

    dialogRef.afterClosed().subscribe(
      result => console.log('dialog result', result)
    );
  }


  ngOnInit(): void {
    togglebutton();
  }

}
