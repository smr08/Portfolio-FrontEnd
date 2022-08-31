import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  expURL = 'http://localhost:8080/experiencialab/';

  constructor(private http: HttpClient) { }

  public mostrarExperiencia(): Observable<any>{
    return this.http.get(this.expURL + 'traer');
  }

  public buscarExperiencia(id: number): Observable<any>{
    return this.http.get<any>(this.expURL + `buscar/${id}`)
  }

  public agregarExperiencia(experiencia: Experiencia): Observable<any>{
    return this.http.post<any>(this.expURL + 'crear', experiencia);
  }

  public editarExperiencia(experiencia: Experiencia): Observable<any>{
    return this.http.put<any>(this.expURL + 'editar', experiencia); 
  }

  public borrarExperiencia(id: number): Observable<any>{
    return this.http.delete<any>(this.expURL + `borrar/${id}`);
  }
}

