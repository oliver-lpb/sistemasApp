export class califcModel{
    id?: string;
    cursoId:string;
    tarea: string;
    creadoPor:string;
    fechaCreacion: Date;
    descripcion:string;
    
    constructor(cursoId:string,tarea:string,creadoPor:string,descripcion:string,fechaCreacion:Date){
        this.cursoId = cursoId;
        this.tarea = tarea;
        this.creadoPor = creadoPor;
        this.descripcion = descripcion;
        this.fechaCreacion = new Date();
    }

}