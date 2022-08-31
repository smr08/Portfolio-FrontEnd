import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proye: any;
  formuproye: FormGroup;
  nombreProyecto : string = "";
  descripcionProyecto : string = "";
  imgProyecto : string = "";
  linkProyecto : string = "";

  constructor(private proyectoService: ProyectosService, private formBuilder: FormBuilder, private tokenService: TokenService) { 
    this.formuproye = this.formBuilder.group({
      nombreProyecto :['',[Validators.required]],
      descripcionProyecto :['',[Validators.required]],
      imgProyecto :['',[Validators.required]],
      linkProyecto : ['',[Validators.required]]
    })
  }

  isLogged = false;

  ngOnInit(): void {

    this.proyectoService.mostrarProyecto().subscribe(data =>{this.proye = data;})

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    
  }

  get NombreProyecto()
  {
    return this.formuproye.get('nombreProyecto');
  }

  get DescripcionProyecto()
  {
    return this.formuproye.get('descripcionProyecto');
  }

  get ImgProyecto()
  {
    return this.formuproye.get('imgProyecto');
  }

  get LinkProyecto()
  {
    return this.formuproye.get('linkProyecto');
  }

  /*PARA EL CREAR*/

 agregarProyecto(){
  this.nombreProyecto = this.formuproye.value.nombreProyecto;
  this.descripcionProyecto = this.formuproye.value.descripcionProyecto;
  this.imgProyecto = this.formuproye.value.imgProyecto;

  let proyecto: Proyectos = {
    "nombreProyecto": this.nombreProyecto,
    "descripcionProyecto": this.descripcionProyecto,
    "imgProyecto": this.imgProyecto,
    "linkProyecto": this.linkProyecto
  }


  this.proyectoService.agregarProyecto(proyecto).subscribe(
    data =>{
      alert("Proyecto creado Correctamente")
      location.href="/"
    }
  );
 }

 /*PARA EL EDITAR*/

 auxId!: number;
 nombrePSelect = "";
 descripcionPSelect = "";
 imgPSelect = "";
 linkPSelect = "";

 buscarProyecto(item: number){
   this.auxId = item;
   this.nombrePSelect = this.proye[this.auxId].nombreProyecto;
   this.descripcionPSelect = this.proye[this.auxId].descripcionProyecto; 
   this.imgPSelect = this.proye[this.auxId].imgProyecto;
   this.linkPSelect = this.proye[this.auxId].linkProyecto;
 }

 editarProyecto(item: number){
   
   let proyecto: Proyectos = {
     "id": this.proye[item].id,
     "nombreProyecto": this.formuproye.value.nombreProyecto,
     "descripcionProyecto": this.formuproye.value.descripcionProyecto,
     "imgProyecto": this.formuproye.value.imgProyecto,
     "linkProyecto": this.formuproye.value.linkProyecto
   }

   this.proyectoService.editarProyecto(proyecto).subscribe(
     data =>{
       alert("Proyecto Editado Correctamente")
       location.href="/"
     }
   );

 }

 /*PARA EL ELIMINAR*/
 
 borrarProyecto(item: number){

  this.proyectoService.borrarProyecto(this.proye[item].id).subscribe(
    data =>{
      alert("Proyecto Eliminado Correctamente")
      location.href="/"
    }
  );
} 

}

