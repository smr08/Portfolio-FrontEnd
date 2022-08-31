import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AcercaDeMi } from 'src/app/model/acerca-de-mi';
import { AcercaDeMiService } from 'src/app/service/acerca-de-mi.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {
  acerca: any;
  formuacerca: FormGroup;
  descripcion : string = "";

  constructor(private acercaDeMiService: AcercaDeMiService, private formBuilder: FormBuilder, private tokenService: TokenService) {
    this.formuacerca = this.formBuilder.group({

      descripcion : ''
      
    })
   }

   isLogged = false;

  ngOnInit(): void {
    this.acercaDeMiService.mostrarAcercaDeMi().subscribe(data =>{this.acerca = data;})

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

  }

  /*PARA EL EDITAR*/

 auxId!: number;
 descripcionSelect = "";
 

 buscarAcercaDeMi(item: number){
   this.auxId = item;
   this.descripcionSelect = this.acerca[this.auxId].descripcion; 
 }

 editarAcercaDeMi(item: number){
   
   let acercaDeMi: AcercaDeMi = {
     "id": this.acerca[item].id,
     "descripcion": this.formuacerca.value.descripcion,
   }

   this.acercaDeMiService.editarAcercaDeMi(acercaDeMi).subscribe(
     data =>{
       alert("Descripción Editada Correctamente")
       location.href="/"
     }
   );

 }

}
