import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {
  persona: any;
  formAcercaDe: FormGroup;

  constructor(public personaService: PersonaService, private formBuilder: FormBuilder, private tokenService: TokenService) {
    this.formAcercaDe= this.formBuilder.group({
      nombre:'', 
      apellido:''
    })
   }

   isLogged = false;

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data} )

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    
  }

 
  auxId!: number;
  nombreSelect = "";
  apellidoSelect = "";

  buscarNombre(item: number){

    this.auxId = item;
    this.nombreSelect = this.persona[this.auxId].nombre;
    this.apellidoSelect = this.persona[this.auxId].apellido;
  }

  editarPersona(item: number){

    let persona: persona = {
      "id": this.persona[item].id,
      "nombre": this.formAcercaDe.value.nombre,
      "apellido": this.formAcercaDe.value.apellido,
      "img": this.formAcercaDe.value.img
    }

    this.personaService.editarPersona(persona).subscribe(
      data =>{
        alert("La Persona Fue Editada")
        location.href="/"
      }
    );

  }
}
