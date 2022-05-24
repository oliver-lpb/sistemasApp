export class tareaModel{
    id?: string;
    curso:string;
    titulo: string;
    creadoPor : string
    descripcion: string;
    fechaEntrega:string;
    fechaCreacion: Date;
    
    constructor(curso:string,titulo:string,creadoPor:string,descripcion:string,fechaEntrega:string, fechaCreacion:Date){
        this.curso = curso;
        this.titulo = titulo;
        this.creadoPor = creadoPor;
        this.descripcion = descripcion;
        this.fechaEntrega= fechaEntrega;
        this.fechaCreacion = new Date();
    }

}