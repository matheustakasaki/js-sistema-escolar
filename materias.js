import { Aluno } from "./aluno.js";
import { Professor } from "./professor.js";

export class Materias {
    constructor(nome, professor, alunos, cargaHoraria){
        this.nome = nome;
        this.professor = professor;
        this.alunos = alunos;
        this.cargaHoraria = cargaHoraria;
    }

    set alunos (novoAluno){
        if (novoAluno instanceof Aluno) {
            this.alunos = novoAluno;
        }
    }

    set professor(novoProfessor){
        if (novoProfessor instanceof Professor) {
            this.professor = novoProfessor;
        }
    }

    get alunos (){
        return this.alunos;
    }
}