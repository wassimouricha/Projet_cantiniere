import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Menu } from './menu';
import { ImageMeal } from '../image/image';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  baseURL = environment.url;
  id: number;


    

  constructor( 
    private _http: HttpClient
  ){}


      getMenuOfTheWeek() : Observable<Menu[]>{
        return this._http.get<Menu[]>(`${this.baseURL}/meal/findallavailableforthisweek`)
      }


      getImageForAMeal(image: number): Observable<ImageMeal>{
        return this._http.get<ImageMeal>(`${this.baseURL}/meal/findimg/${image}`)
      }

}
