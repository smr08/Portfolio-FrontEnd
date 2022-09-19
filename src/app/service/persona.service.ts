import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'https://backendrossi.herokuapp.com/personas';


  constructor(private http: HttpClient) { }

  public getPersona(): Observable<any> {
    return this.http.get(this.URL+ '/traer');
  }

  public editarPersona(persona: persona): Observable<any>{
    return this.http.put<any>(this.URL+'/editar',persona)
  }
}
