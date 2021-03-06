import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country, Currency, Language, RegionalBloc } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  urlBase:string = 'https://restcountries.eu/rest/v2'

  constructor( private http:HttpClient){ }

  buscarPais( termino:string):Observable<Country[]> {
    return this.http.get<Country[]>(`${this.urlBase}/name/${termino}`);
  }

  buscarCapital( termino:string):Observable<any> {
    return this.http.get(`${this.urlBase}/capital/${termino}`);
  }

  buscarRegion( termino:string):Observable<Country[]> {

    const params = new HttpParams()
      .set('fields', 'name;capital;alpha2Code;flag;population');

    return this.http.get<Country[]>(`${this.urlBase}/region/${termino}`, { params });
  }

  buscarIdioma( termino:string):Observable<Country[]> {
    return this.http.get<Country[]>(`${this.urlBase}/lang/${termino}`);
  }

  buscarMoneda( termino:string):Observable<Country[]> {
    return this.http.get<Country[]>(`${this.urlBase}/currency/${termino}`);
  }

  detallePais( termino:string ):Observable<Country[]> {
    return this.http.get<Country[]>(`${this.urlBase}/alpha/${termino}`);
  }

}
