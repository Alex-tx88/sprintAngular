import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  
  private baseUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  fazerLogin(nome: string, senha: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { nome, senha });
  }

  getVeiculos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/vehicles`);
  }

  getDadosVin(vin: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/vehicleData`, { vin });
  }
}