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
        return 9;
    }

    estaAprovado() {
        return this.calcularMedia() >= Aluno.MEDIA_APROVACAO;
    }

    getSituacao() {
        return this.estaAprovado() ? "Aprovado" : "Reprovado";
    }
}
