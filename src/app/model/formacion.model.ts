export class formacion {
    idForm?: number;
    titulo: String;
    institucion: String;
    ciudad: String;
    ano_inicio: number;
    ano_final: number;
    descripcion: String;

    constructor(
        titulo: String,
        institucion: String,
        ciudad: String,
        ano_inicio: number,
        ano_final: number,
        descripcion: String,
    ) {
        this.titulo = titulo;
        this.institucion = institucion;
        this.ciudad = ciudad;
        this.ano_inicio = ano_inicio;
        this.ano_final = ano_final;
        this.descripcion = descripcion;
    }

}