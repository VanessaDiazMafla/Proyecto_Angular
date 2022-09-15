//crea un modelo de datos - tabla

export interface Comentario{

    id?:number; //signo ? significa un dato opcional - no obligatorio
    titulo:string;
    autor:string;
    texto:string;
    fechaCreacion: Date;
}