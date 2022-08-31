import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hyss',
  templateUrl: './hyss.component.html',
  styleUrls: ['./hyss.component.css']
})
export class HyssComponent implements OnInit {

  habil: any;
  formuhabi: FormGroup;
  nombreHabilidad : string= "";
  porcentajeHaabilidad : any = "";
  logoHabilidad : string= "";

  constructor(private habilidadesService: HabilidadesService, private formBuilder: FormBuilder, private tokenService: TokenService) {
    this.formuhabi = this.formBuilder.group({
      nombreHabilidad :['',[Validators.required]],
      porcentajeHaabilidad :['',[Validators.required]],
      logoHabilidad :['',[Validators.required]]
    })
   }

   isLogged = false;

  ngOnInit(): void {

    this.habilidadesService.mostrarHabilidad().subscribe(data =>{this.habil = data;})

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    
  }

  get NombreHabilidad()
  {
    return this.formuhabi.get('nombreHabilidad');
  }

  get PorcentajeHabilidad()
  {
    return this.formuhabi.get('porcentajeHaabilidad');
  }

  get LogoHabilidad()
  {
    return this.formuhabi.get('logoHabilidad');
  }

  /*PARA EL CREAR*/

 agregarHabilidad(){
  this.nombreHabilidad = this.formuhabi.value.nombreHabilidad;
  this.porcentajeHaabilidad = this.formuhabi.value.porcentajeHaabilidad;
  this.logoHabilidad = this.formuhabi.value.logoHabilidad;

  let habilidad: Habilidades = {
    "nombreHabilidad": this.nombreHabilidad,
    "porcentajeHaabilidad": this.porcentajeHaabilidad,
    "logoHabilidad": this.logoHabilidad
  }


  this.habilidadesService.agregarHabilidad(habilidad).subscribe(
    data =>{
      alert("Habilidad creada Correctamente")
      location.href="/"
    }
  );
 }

 /*PARA EL EDITAR*/

 auxId!: number;
 nombreHSelect = "";
 porcentajeHSelect = "";
 logoHSelect = "";

 buscarHabilidad(item: number){
   this.auxId = item;
   this.nombreHSelect = this.habil[this.auxId].nombreHabilidad;
   this.porcentajeHSelect = this.habil[this.auxId].porcentajeHaabilidad; 
   this.logoHSelect = this.habil[this.auxId].logoHabilidad;
 }

 editarHabilidad(item: number){
   
   let habilidad: Habilidades = {
     "id": this.habil[item].id,
     "nombreHabilidad": this.formuhabi.value.nombreHabilidad,
     "porcentajeHaabilidad": this.formuhabi.value.porcentajeHaabilidad,
     "logoHabilidad": this.formuhabi.value.logoHabilidad
   }

   this.habilidadesService.editarHabilidad(habilidad).subscribe(
     data =>{
       alert("Habilidad Editada Correctamente")
       location.href="/"
     }
   );

 }

 /*PARA EL ELIMINAR*/
 
 borrarHabilidad(item: number){

  this.habilidadesService.borrarHabilidad(this.habil[item].id).subscribe(
    data =>{
      alert("Habilidad Eliminada Correctamente")
      location.href="/"
    }
  );
} 

}
