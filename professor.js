import { Aluno } from "./aluno.js";

export class Professor {
    nome;
    aluno;
    darNota(nota, aluno){
        if (aluno instanceof Aluno) {
            aluno._nota= nota;
        }
        console.log('O aluno é: ',aluno);
    }
}