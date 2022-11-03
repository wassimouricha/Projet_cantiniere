import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { HttpClient } from '@angular/common/http' ;
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppelService {



  constructor(private httpClient :HttpClient) { }


  getTask(): Observable<any[]>{
    // envoie une requete http get vers https://jsonplaceholder.typicode.com/todos
   return  this.httpClient.get<any[]>("https://jsonplaceholder.typicode.com/todos")
    // return this.tasks
  }
}
