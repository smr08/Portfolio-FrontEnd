import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {  

  edu: any;
  formuedu: FormGroup;
  lugarEstudio : string = "";
  nombreEstudio : string = "";
  descripcionEstudio : string = "";
  logoEstudio : string = "";

  constructor(private educacionService: EducacionService, private formBuilder: FormBuilder, private tokenService: TokenService ) { 
    this.formuedu = this.formBuilder.group({
      lugarEstudio : ['',[Validators.required]],
      nombreEstudio : ['',[Validators.required]],
      descripcionEstudio : ['',[Validators.required]],
      logoEstudio : ['',[Validators.required]],
    })
  }

  isLogged = false;

  ngOnInit(): void {

    this.educacionService.mostrarEducacion().subscribe(data =>{this.edu = data;})

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    
  }

  get LugarEstudio()
  {
    return this.formuedu.get('lugarEstudio');
  }

  get NombreEstudio()
  {
    return this.formuedu.get('nombreEstudio');
  }

  get DescripcionEstudio()
  {
    return this.formuedu.get('descripcionEstudio');
  }

  get LogoEstudio()
  {
    return this.formuedu.get('logoEstudio');
  }

  /*PARA EL CREAR*/

 agregarEducacion(){
  this.lugarEstudio = this.formuedu.value.lugarEstudio;
  this.nombreEstudio = this.formuedu.value.nombreEstudio;
  this.descripcionEstudio = this.formuedu.value.descripcionEstudio;
  this.logoEstudio = this.formuedu.value.logoEstudio;

  let educacion: Educacion = {
    "lugarEstudio": this.lugarEstudio,
    "nombreEstudio": this.nombreEstudio,
    "descripcionEstudio": this.descripcionEstudio,
    "logoEstudio": this.logoEstudio
  }


  this.educacionService.agregarEducacion(educacion).subscribe(
    data =>{
      alert("Educacion creada Correctamente")
      location.href="/"
    }
  );
 }

 /*PARA EL EDITAR*/

 auxId!: number;
 lugarESelect = "";
 nombreESelect = "";
 descripcionESelect = "";
 logoESelect = "";

 buscarEducacion(item: number){
   this.auxId = item;
   this.lugarESelect = this.edu[this.auxId].lugarEstudio;
   this.nombreESelect = this.edu[this.auxId].nombreEstudio;
   this.descripcionESelect = this.edu[this.auxId].descripcionEstudio; 
   this.logoESelect = this.edu[this.auxId].logoEstudio;
 }

 editarEducacion(item: number){
   
   let educacion: Educacion = {
     "id": this.edu[item].id,
     "lugarEstudio": this.formuedu.value.lugarEstudio,
     "nombreEstudio": this.formuedu.value.nombreEstudio,
     "descripcionEstudio": this.formuedu.value.descripcionEstudio,
     "logoEstudio": this.formuedu.value.logoEstudio
   }

   this.educacionService.editarEducacion(educacion).subscribe(
     data =>{
       alert("Educacion Editada Correctamente")
       location.href="/"
     }
   );

 }

 /*PARA EL ELIMINAR*/
 
 borrarEducacion(item: number){

  this.educacionService.borrarEducacion(this.edu[item].id).subscribe(
    data =>{
      alert("Educación Eliminada Correctamente")
      location.href="/"
    }
  );
} 

}
