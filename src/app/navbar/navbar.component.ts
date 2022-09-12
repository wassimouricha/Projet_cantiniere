import { Component, OnInit, } from '@angular/core';
import { faBars} from '@fortawesome/free-solid-svg-icons';


declare function togglebutton():any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // je crée une variable pour l'icone fabars pouvant etre appelé dans le html 
  bars = faBars;

  constructor() { 
  }

  ngOnInit(): void {
    togglebutton();
  }

}
