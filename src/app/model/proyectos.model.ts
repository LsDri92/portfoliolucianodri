export class proyectos {
    idPro?: number;
    url_proyecto: String ;
    descripcion: String ;
    url_imagen: String ;

    constructor(
        url_proyecto: String ,
        descripcion: String ,
        url_imagen: String ,
    ) {
        this.url_proyecto = url_proyecto;
        this.descripcion = descripcion;
        this.url_imagen = url_imagen;
    }
}
