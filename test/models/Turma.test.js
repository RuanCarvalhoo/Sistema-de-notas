import { describe, it, expect } from "@jest/globals";

import Turma from "../../src/models/Turma.js";
import Aluno from "../../src/models/Aluno.js";

describe("Turma", () => {

    describe("constructor", () => {
        it("deve criar uma turma com nome e sem alunos", () => {
            const turma = new Turma("Turma A");

            expect(turma.nome).toBe("Turma A");
            expect(turma.alunos).toEqual([]);
        });
    });

    describe("adicionarAluno", () => {
        it("deve adicionar um aluno à lista de alunos da turma", () => {
            const turma = new Turma("Turma A");
            const aluno = new Aluno("Maria", [8, 9]);

            turma.adicionarAluno(aluno);

            expect(turma.alunos.length).toBe(1);
            expect(turma.alunos[0]).toBe(aluno);
        });
    });

    describe("estaVazia", () => {
        it("deve retornar true quando a turma não possui alunos", () => {
            const turma = new Turma("Turma A");

            expect(turma.estaVazia()).toBe(true);
        });

        it("deve retornar false quando a turma possui ao menos um aluno", () => {
            const turma = new Turma("Turma A");
            turma.adicionarAluno(new Aluno("João", [7, 8]));

            expect(turma.estaVazia()).toBe(false);
        });
    });

    describe("obterAprovados", () => {
        it("deve retornar apenas os alunos com média maior ou igual à média de aprovação", () => {
            const turma = new Turma("Turma A");
            const aprovado = new Aluno("Maria", [9, 8]);
            const reprovado = new Aluno("João", [4, 5]);

            turma.adicionarAluno(aprovado);
            turma.adicionarAluno(reprovado);

            const aprovados = turma.obterAprovados();

            expect(aprovados.length).toBe(1);
            expect(aprovados[0]).toBe(aprovado);
        });
    });

});
