import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';

import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: any;
  formuexpe: FormGroup;
  nombreTrabajo : string = "";
  fechaTrabajo : string = "";
  descripcionTrabajo : string = "";
  logoTrabajo : string = "";

  constructor(private experienciaService: ExperienciaService, private formBuilder: FormBuilder, private tokenService: TokenService) { 
    this.formuexpe = this.formBuilder.group({
      nombreTrabajo : ['',[Validators.required]],
      fechaTrabajo : ['',[Validators.required]],
      descripcionTrabajo : ['',[Validators.required]],
      logoTrabajo : ['',[Validators.required]]
    })
  }

  isLogged = false;

  ngOnInit(): void {
   
    this.experienciaService.mostrarExperiencia().subscribe(data =>{this.expe = data;})

    

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
   
  }

  get NombreTrabajo()
  {
    return this.formuexpe.get('nombreTrabajo');
  }

  get FechaTrabajo()
  {
    return this.formuexpe.get('fechaTrabajo');
  }

  get DescripcionTrabajo()
  {
    return this.formuexpe.get('descripcionTrabajo');
  }

  get LogoTrabajo()
  {
    return this.formuexpe.get('logoTrabajo');
  }


  /*PARA EL CREAR*/

 agregarExperiencia(){
  this.nombreTrabajo = this.formuexpe.value.nombreTrabajo;
  this.fechaTrabajo = this.formuexpe.value.fechaTrabajo;
  this.descripcionTrabajo = this.formuexpe.value.descripcionTrabajo;
  this.logoTrabajo = this.formuexpe.value.logoTrabajo;

  let experiencia: Experiencia = {
    "nombreTrabajo": this.nombreTrabajo,
    "fechaTrabajo": this.fechaTrabajo,
    "descripcionTrabajo": this.descripcionTrabajo,
    "logoTrabajo": this.logoTrabajo
  }


  this.experienciaService.agregarExperiencia(experiencia).subscribe(
    data =>{
      alert("Experiencia creada Correctamente")
      location.href="/"
    }
  );
 }


 /*PARA EL EDITAR*/

  auxId!: number;
  nombreTSelect = "";
  fechaTSelect = "";
  descripcionTSelect = "";
  logoTSelect = "";

  buscarExperiencia(item: number){
    this.auxId = item;
    this.nombreTSelect = this.expe[this.auxId].nombreTrabajo;
    this.fechaTSelect = this.expe[this.auxId].fechaTrabajo;
    this.descripcionTSelect = this.expe[this.auxId].descripcionTrabajo;
    this.logoTSelect = this.expe[this.auxId].logoTrabajo;
  }

  editarExperiencia(item: number){
    
    let experiencia: Experiencia = {
      "id": this.expe[item].id,
      "nombreTrabajo": this.formuexpe.value.nombreTrabajo,
      "fechaTrabajo": this.formuexpe.value.fechaTrabajo,
      "descripcionTrabajo": this.formuexpe.value.descripcionTrabajo,
      "logoTrabajo": this.formuexpe.value.logoTrabajo
    }

    this.experienciaService.editarExperiencia(experiencia).subscribe(
      data =>{
        alert("Experiencia Editada Correctamente")
        location.href="/"
      }
    );

  }

 /*PARA EL ELIMINAR*/
 
 borrarExperiencia(item: number){

  this.experienciaService.borrarExperiencia(this.expe[item].id).subscribe(
    data =>{
      alert("Experiencia Eliminada Correctamente")
      location.href="/"
    }
  );
} 

}


