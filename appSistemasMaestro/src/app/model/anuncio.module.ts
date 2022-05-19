export class anuncioModel{
    id?: string;
    titulo: string;
    creadoPor : string
    descripcion: string;
    grado:string;
    fechaCreacion: Date;
    
    constructor(titulo:string,creadoPor:string,descripcion:string,grado:string, fechaCreacion:Date){
        this.titulo = titulo;
        this.creadoPor = creadoPor;
        this.descripcion = descripcion;
        this.grado = grado;
        this.fechaCreacion = new Date();
    }

}