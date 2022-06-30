export class skills {
    idSkill?: number;
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