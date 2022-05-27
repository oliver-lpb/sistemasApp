export class califcModel{
    id?: string;
    cursoId:string;
    tarea: string;
    creadoPor:string;
    fechaCreacion: Date;
    comentario:string;
    punteo:string;
    
    constructor(cursoId:string,tarea:string,creadoPor:string,comentario:string,punteo:string,fechaCreacion:Date){
        this.cursoId = cursoId;
        this.tarea = tarea;
        this.creadoPor = creadoPor;
        this.comentario = comentario;
        this.punteo = punteo;
        this.fechaCreacion = new Date();

    }

}
