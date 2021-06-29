export class Aluno {
    nome;
    cpf;
    matricula;
    _nota = -9;

    passar() {
        // Early return para não receber valores negativos
        if(this._nota < 0) return

        // Condição para aprovação
        if (this._nota >= 6) {
            console.log(this.nome + ' passou! Top!');
        } else {
            console.log(this.nome + ' Reprovou :(');
        }
    }
}