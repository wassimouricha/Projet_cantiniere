import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  /**
   * Cette fonction prend une chaîne de caractères comme argument et l'enregistre dans le stockage local.
   * @param {string} token - Le jeton que vous voulez sauvegarder.
   */
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  /**
   * S'il existe un jeton dans le stockage local, retournez true, sinon retournez false.
   * @returns Une valeur booléenne.
   */
  isLogged() {
    const savedToken = localStorage.getItem('token');
    return !!savedToken;
  }

  /**
   * Cette fonction vérifie si le jeton est enregistré dans le stockage local, si c'est le cas, il décode 
   * le jeton et renvoie l'objet utilisateur.
   */
  getUserInfo() {
    const savedToken = localStorage.getItem('token');

    if (savedToken != null) {
      const infoDecode: any = jwtDecode(savedToken);

      return infoDecode.user;
    }
    return false;
  }

  /**
   * La fonction de déconnexion supprime le jeton du stockage local.
   */
  logout() {
    localStorage.removeItem('token');
  }
}
