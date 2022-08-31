import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../model/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  habURL = 'http://localhost:8080/habilidades/';

  constructor(private http: HttpClient) { }

  public mostrarHabilidad(): Observable<any>{
    return this.http.get(this.habURL + 'traer');
  }

  public buscarHabilidad(id: number): Observable<any>{
    return this.http.get<any>(this.habURL + `buscar/${id}`)
  }

  public agregarHabilidad(experiencia: Habilidades): Observable<any>{
    return this.http.post<any>(this.habURL + 'crear', experiencia);
  }

  public editarHabilidad(experiencia: Habilidades): Observable<any>{
    return this.http.put<any>(this.habURL + 'editar', experiencia); 
  }

  public borrarHabilidad(id: number): Observable<any>{
    return this.http.delete<any>(this.habURL + `borrar/${id}`);
  }
}
