export class Educacion {
    id? : number;
    lugarEstudio : string;
    nombreEstudio : string;
    descripcionEstudio : string;
    logoEstudio : string;

    constructor(lugarEstudio:string, nombreEstudio:string, descripcionEstudio: string, logoEstudio:string) {
        this.lugarEstudio = lugarEstudio;
        this.nombreEstudio = nombreEstudio;
        this.descripcionEstudio = descripcionEstudio;
        this.logoEstudio = logoEstudio;

    }
}
