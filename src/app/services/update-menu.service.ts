import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateMenuService {
  private apiUrl = 'http://localhost:8080/stone.lunchtime/meal/update';
  
  constructor(private http: HttpClient) { }

  updateMenuName(id: string, name: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}/label`, {name: name}).pipe(catchError(this.handleError));
  }

  updateMenuPrice(id: string, price: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}/priceDF`, {price: price}).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Une erreur s\'est produite:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Un problème est survenu; veuillez réessayer plus tard.');
  }
}
