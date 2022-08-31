export class Experiencia {
    id? : number;
    nombreTrabajo : string;
    fechaTrabajo : string;
    descripcionTrabajo : string;
    logoTrabajo : string;


    constructor(nombreTrabajo:string, fechaTrabajo:string, descripcionTrabajo:string, logoTrabajo:string ){
        this.nombreTrabajo = nombreTrabajo;
        this.fechaTrabajo = fechaTrabajo;
        this.descripcionTrabajo = descripcionTrabajo;
        this.logoTrabajo = logoTrabajo;
        
    }

}
