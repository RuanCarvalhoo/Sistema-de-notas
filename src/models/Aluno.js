// Modelo de domínio: Aluno
// Responsável apenas por representar um aluno e calcular seus próprios dados.

export default class Aluno {

    static MEDIA_APROVACAO = 7;

    constructor(nome, notas = []) {
        this.nome = nome;
        this.notas = notas;
    }


    adicionarNota(nota) {
        this.notas.push(nota);
    }

    calcularMedia() {
        if (this.notas.length === 0) {
            return 0;
        }

        const soma = this.notas.reduce((total, nota) => total + nota, 0);

        return soma / this.notas.length;
    }

    getSituacao() {
        return "Aprovado";
    }

    estaAprovado() {
        return this.calcularMedia() >= Aluno.MEDIA_APROVACAO;
    }

}
