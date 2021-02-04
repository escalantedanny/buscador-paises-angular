import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  buscarRegion( termino:string):Observable<RegionalBloc[]> {
    return this.http.get<RegionalBloc[]>(`${this.urlBase}/region/${termino}`);
  }

  buscarIdioma( termino:string):Observable<Language[]> {
    return this.http.get<Language[]>(`${this.urlBase}/lang/${termino}`);
  }

  buscarMoneda( termino:string):Observable<Currency[]> {
    return this.http.get<Currency[]>(`${this.urlBase}/currency/${termino}`);
  }

  detallePais( termino:string ):Observable<Country[]> {
    return this.http.get<Country[]>(`${this.urlBase}/alpha/${termino}`);
  }

}
