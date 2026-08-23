// Camada de serviço: SistemaDeNotas
// Orquestra as turmas. Não conhece o terminal (readline) nem console.log.

import Turma from "../models/Turma.js";
import Aluno from "../models/Aluno.js";

export default class SistemaDeNotas {
    constructor(nomesTurmas = []) {
        // Map<nomeTurma, Turma> — acaba com a cadeia de if/else por turma.
        this.turmas = new Map();

        for (const nome of nomesTurmas) {
            this.turmas.set(nome, new Turma(nome));
        }
    }

    getNomesTurmas() {
        return [...this.turmas.keys()];
    }

    getTurma(nomeTurma) {
        return this.turmas.get(nomeTurma) ?? null;
    }

    cadastrarAluno(nome, notas, nomeTurma) {
        const turma = this.getTurma(nomeTurma);

        if (!turma) {
            throw new Error(`Turma inexistente: ${nomeTurma}`);
        }

        const aluno = new Aluno(nome, notas);
        turma.adicionarAluno(aluno);

        return aluno;
    }

    // Analítica de todas as turmas que possuem alunos.
    analisarTodasAsTurmas() {
        return [...this.turmas.values()]
            .map(turma => turma.analisar())
            .filter(analise => analise !== null);
    }

    listarTodosOsAlunos() {
        const alunos = [];

        for (const turma of this.turmas.values()) {
            for (const aluno of turma.alunos) {
                alunos.push({ aluno, turma: turma.nome });
            }
        }

        return alunos;
    }
}