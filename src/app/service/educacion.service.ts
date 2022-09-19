import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  eduURL = 'https://backendrossi.herokuapp.com/educacion/';

  constructor(private http: HttpClient) { }

  public mostrarEducacion(): Observable<any>{
    return this.http.get(this.eduURL + 'traer');
  }

  public buscarEducacion(id: number): Observable<any>{
    return this.http.get<any>(this.eduURL + `buscar/${id}`)
  }

  public agregarEducacion(educacion: Educacion): Observable<any>{
    return this.http.post<any>(this.eduURL + 'crear', educacion);
  }

  public editarEducacion(educacion: Educacion): Observable<any>{
    return this.http.put<any>(this.eduURL + 'editar', educacion); 
  }

  public borrarEducacion(id: number): Observable<any>{
    return this.http.delete<any>(this.eduURL + `borrar/${id}`);
  }
}
