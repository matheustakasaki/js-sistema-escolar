import { Aluno } from "./aluno.js";
import { Professor } from "./professor.js";





// Instancia um aluno
const aluno1 = new Aluno();
// Atribui as propriedades dele
aluno1.nome = 'Matheus';
aluno1.cpf = '13105006907';

aluno1.passar();

// Instancia um professor
const professor = new Professor();
professor.aluno = aluno1

professor.darNota(23, aluno1)