
export class Aluno {

    constructor (nome, cpf, matricula){
        this.nome = nome;
        this._cpf = cpf;
        this._matricula = matricula;
    }

    set aluno(novoAluno){
        if (novoAluno instanceof Aluno) {
            return this.novoAluno;
        }
    }

    get aluno(){
        return this.aluno;
    }
    
    get alunoCpf(){
        return this._cpf= alunoCpf;
    }
}
