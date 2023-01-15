import { Injectable } from '@angular/core';
import { Menu } from './modal/menuweek/menu';
import { HttpClient } from '@angular/common/http' ;
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppelService {

  constructor(private httpClient :HttpClient) { }
}
