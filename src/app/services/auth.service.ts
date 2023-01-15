import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Login, Register } from '../model/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient : HttpClient) { }

/**
 * Cette fonction renvoi un observable de type HttpResponse<objet> qui est le résultat d'une 
 * requête post vers l'url 'http://localhost:8080/stone.lunchtime/login' avec l'objet login comme corps de la requête.
 * @param {Login} login - Login - c'est l'objet qui est envoyé au serveur.
 * @returns La réponse du serveur.
 */
  login(login : Login) : Observable<HttpResponse<object>>{
    return this.httpClient.post('http://localhost:8080/stone.lunchtime/login', login , {observe: 'response'}) 
  }


/**
 * Cette fonction prend un objet Registre comme paramètre et retourne un Observable de type HttpResponse de type objet
 * @param {Register} register - Register
 * @returns La réponse du serveur.
 */
  register(register : Register ) : Observable<HttpResponse<object>>{
    return this.httpClient.put('http://localhost:8080/stone.lunchtime/user/register', register , {observe: 'response'}) 
  }

}
