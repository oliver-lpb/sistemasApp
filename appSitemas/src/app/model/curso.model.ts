export class cursoModel{
    id?: string;
    nombre: string;
    creadoPor : string
    seccion: string;
    materia: string;
    aula: string;
    
    constructor(nombre:string,creadoPor:string,seccion:string,materia:string,aula:string){

    this.nombre = nombre;
    this.creadoPor = creadoPor;
    this.seccion = seccion;
    this.materia = materia;
    this.aula = aula

    }

}