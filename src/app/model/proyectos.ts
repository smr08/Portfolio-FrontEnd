export class Proyectos {

    id?: number;
    nombreProyecto: string;
    descripcionProyecto: string;
    imgProyecto: string;
    linkProyecto: string;

    constructor(nombreProyecto: string, descripcionProyecto: string, imgProyecto: string, linkProyecto: string) {
        this.nombreProyecto = nombreProyecto;
        this.descripcionProyecto = descripcionProyecto;
        this.imgProyecto = imgProyecto;
        this.linkProyecto = linkProyecto;
    }
}
