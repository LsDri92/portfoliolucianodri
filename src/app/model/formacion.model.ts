export class formacion {
    id?: number;
    titulo: String ;
    ciudad: String ;
    año_inicio: number ;
    año_final: number ;
    descripcion: String ;

    constructor (
        titulo: String ,
    ciudad: String ,
    año_inicio: number ,
    año_final: number ,
    descripcion: String ,
    ){
        this.titulo = titulo;
        this.ciudad = ciudad;
        this.año_inicio = año_inicio;
        this.año_final = año_final;
        this.descripcion = descripcion;
    }
    
}