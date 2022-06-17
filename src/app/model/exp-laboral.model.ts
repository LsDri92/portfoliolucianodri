export class exp_laboral {
    id?: number;
    cargo: String;
    año_inicio: number;
    año_final: number;
    lugar: String;
    descripcion: String;

    constructor (
        
        cargo: String,
        año_inicio: number,
        año_final: number,
        lugar: String,
        descripcion: String,
    ){
        this.cargo = cargo;
        this.año_inicio = año_inicio;
        this.año_final = año_final;
        this.lugar = lugar;
        this.descripcion = descripcion;
    }

    
}