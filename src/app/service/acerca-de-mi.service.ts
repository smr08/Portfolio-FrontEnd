import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDeMi } from '../model/acerca-de-mi';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeMiService {

  acercaURL = 'http://localhost:8080/acercademi/';

  constructor(private http: HttpClient) { }

  public mostrarAcercaDeMi(): Observable<any>{
    return this.http.get(this.acercaURL + 'traer');
  }

  public buscarAcercaDeMi(id: number): Observable<any>{
    return this.http.get<any>(this.acercaURL + `buscar/${id}`)
  }

  public editarAcercaDeMi(acercaDeMi: AcercaDeMi): Observable<any>{
    return this.http.put<any>(this.acercaURL + 'editar', acercaDeMi); 
  }
}

