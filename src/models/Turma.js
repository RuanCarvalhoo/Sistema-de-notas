// Modelo de domínio: Turma
// Agrupa alunos e sabe produzir estatísticas sobre si mesma.

import Aluno from "./Aluno.js";

export default class Turma {

    constructor(nome) {
        this.nome = nome;
        this.alunos = [];
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }

    estaVazia() {
        return this.alunos.length === 0;
    }

    // Retorna um objeto com as estatísticas da turma,
    // sem imprimir nada (separando cálculo de exibição).
    analisar() {
        if (this.estaVazia()) {
            return null;
        }

        let alunoMaiorMedia = this.alunos[0];
        let alunoMenorMedia = this.alunos[0];
        let somaMedias = 0;
        let aprovados = 0;

        for (const aluno of this.alunos) {
            const media = aluno.calcularMedia();
            somaMedias += media;

            if (media > alunoMaiorMedia.calcularMedia()) {
                alunoMaiorMedia = aluno;
            }

            if (media < alunoMenorMedia.calcularMedia()) {
                alunoMenorMedia = aluno;
            }

            if (aluno.estaAprovado()) {
                aprovados++;
            }
        }

        return {
            nome: this.nome,
            alunoMaiorMedia,
            alunoMenorMedia,
            mediaGeral: somaMedias / this.alunos.length,
            aprovados,
            reprovados: this.alunos.length - aprovados
        };
    }
}
