import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/model/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  inscription: Register = {
    name: '',
    firstname: '',
    email: '',
    password: '',
    sex: 0,
  };

  register() {
    this.authService.register(this.inscription).subscribe((data) => {
      // console.log(data);
      this.router.navigate(['Home']);
    });
  }
}
