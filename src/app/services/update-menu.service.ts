import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateMenuService {
  httpClient: any;

  constructor(private http: HttpClient) { }

  /**
   * Fonction utilisée pour modifier un menu
   * @param id ID du menu
   */
  updateMenu(id: string) : Observable<HttpResponse<object>>{
    return this.httpClient.patch('http://localhost:8080/stone.lunchtime/meal/update', id , {observe: 'response'});
  }

}
