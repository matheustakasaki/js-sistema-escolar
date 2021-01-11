import { Materias } from "./materias.js";

export class Aluno {
    materias = new Materias("Português", "André", "José", "8h" );
    
    constructor (nome, cpf, matricula, materias){
        this.nome = nome;
        this._cpf = cpf;
        this._matricula = matricula;
        this.materias = materias
    }

    
}
