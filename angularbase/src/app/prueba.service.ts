import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  private apiUrl = 'http://localhost:8000/api/pruebas/';  // Cambia esta URL a la de tu API de Django

  constructor(private http: HttpClient) { }

  getPruebas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
