export class skills {
    id?: number;
    url_logo: String ;
    nombre: String ;
    descripcion: String ;

    constructor (
        url_logo: String ,
        nombre: String ,
        descripcion: String ,
    ){
        this.url_logo = url_logo;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}