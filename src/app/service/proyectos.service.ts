import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  proURL = 'https://backendrossi.herokuapp.com/proyectos/';

  constructor(private http: HttpClient) { }

  public mostrarProyecto(): Observable<any>{
    return this.http.get(this.proURL + 'traer');
  }

  public buscarProyecto(id: number): Observable<any>{
    return this.http.get<any>(this.proURL + `buscar/${id}`)
  }

  public agregarProyecto(proyecto: Proyectos): Observable<any>{
    return this.http.post<any>(this.proURL + 'crear', proyecto);
  }

  public editarProyecto(proyecto: Proyectos): Observable<any>{
    return this.http.put<any>(this.proURL + 'editar', proyecto); 
  }

  public borrarProyecto(id: number): Observable<any>{
    return this.http.delete<any>(this.proURL + `borrar/${id}`);
  }
}
