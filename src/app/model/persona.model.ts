export class persona {
    id?: number;
    nombre: String;
    lugar: String;
    profesion: String;
    descripcion: String;
    link_github: String;
    link_linkedin: String;
    url_foto: String;


    constructor(
        nombre: String, 
        lugar: String, 
        profesion: String,
        descripcion: String,
        link_github: String,
        link_linkedin: String,
        url_foto: String) {
        this.nombre = nombre;
        this.lugar = lugar;
        this.profesion = profesion;
        this.descripcion = descripcion;
        this.link_github = link_github;
        this.link_linkedin = link_linkedin;
        this.url_foto = url_foto;
    }
}