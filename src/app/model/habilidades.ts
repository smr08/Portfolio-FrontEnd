export class Habilidades {
    id? : number;
    nombreHabilidad : string;
    porcentajeHaabilidad : any;
    logoHabilidad : string;

    constructor(nombreHabilidad: string, porcentajeHaabilidad: any, logoHabilidad: string){
        this.nombreHabilidad = nombreHabilidad;
        this.porcentajeHaabilidad = porcentajeHaabilidad;
        this.logoHabilidad = logoHabilidad;
    }
}
