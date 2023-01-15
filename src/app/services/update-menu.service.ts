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

/**
 * Cette fonction prend un id et un nom, et retourne un observable de n'importe quel type.
 * @param {string} id - string - l'identifiant de l'élément de menu
 * @param {string} name - string
 * @returns Le type de retour est Observable<any>.
 */
  updateMenuName(id: string, name: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}/label`, {name: name}).pipe(catchError(this.handleError));
  }

/**
 * Cette fonction prend en compte un id et un prix, puis met à jour le prix 
 * de l'élément de menu avec l'id donné.
 * @param {string} id - string
 * @param {number} price - number
 * @returns Le type de retour est Observable<any>.
 */
  updateMenuPrice(id: string, price: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}/priceDF`, {price: price}).pipe(catchError(this.handleError));
  }

/**
 * Si l'erreur est une erreur côté client, on l'enregistre dans la console. 
 * S'il s'agit d'une erreur côté serveur, on l'enregistre dans la console et on renvoi un message d'erreur.
 * @param {HttpErrorResponse} error - HttpErrorResponse
 * @returns Le message d'erreur.
 */
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
