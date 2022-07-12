export class exp_laboral {
    idExp?: number;
    cargo: String;
    ano_inicio: number;
    ano_final: number;
    lugar: String;
    descripcion: String;

    constructor (
        
        cargo: String,
        ano_inicio: number,
        ano_final: number,
        lugar: String,
        descripcion: String,
    ){
        this.cargo = cargo;
        this.ano_inicio = ano_inicio;
        this.ano_final = ano_final;
        this.lugar = lugar;
        this.descripcion = descripcion;
    }

    
}