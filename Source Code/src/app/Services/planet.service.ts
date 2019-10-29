import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }
  planets: string = 'https://swapi.co/api/planets/';

  getPlanets() : Observable<any> {
    return this.http.get<any>(this.planets);
  }

  getPlanetById(url: string): Observable<{}> {
    //console.log(url)
    return this.http.get<{}>(url);
  }
}
