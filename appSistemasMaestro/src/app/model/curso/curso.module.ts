export class cursoModel{
  id?: string;
  nombre: string;
  creadoPor : string
  seccion: string;
  materia: string;
  aula: string;
  
  fechaCreacion: Date;
  
  constructor(nombre:string,creadoPor:string,seccion:string,materia:string,aula:string, fechaCreacion:Date){

    this.nombre = nombre;
    this.creadoPor = creadoPor;
    this.seccion = seccion;
    this.materia = materia;
    this.aula = aula
    this.fechaCreacion = new Date();
  }

}