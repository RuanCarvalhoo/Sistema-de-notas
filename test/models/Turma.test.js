import { describe, it } from "node:test";
import assert from "node:assert/strict";

import Turma from "../../src/models/Turma.js";
import Aluno from "../../src/models/Aluno.js";

describe("Turma", () => {

    describe("constructor", () => {
        it("deve criar uma turma com nome e sem alunos", () => {
            const turma = new Turma("Turma A");

            assert.equal(turma.nome, "Turma A");
            assert.deepEqual(turma.alunos, []);
        });
    });

    describe("adicionarAluno", () => {
        it("deve adicionar um aluno à lista de alunos da turma", () => {
            const turma = new Turma("Turma A");
            const aluno = new Aluno("Maria", [8, 9]);

            turma.adicionarAluno(aluno);

            assert.equal(turma.alunos.length, 1);
            assert.equal(turma.alunos[0], aluno);
        });
    });

    describe("estaVazia", () => {
        it("deve retornar true quando a turma não possui alunos", () => {
            const turma = new Turma("Turma A");

            assert.equal(turma.estaVazia(), true);
        });

        it("deve retornar false quando a turma possui ao menos um aluno", () => {
            const turma = new Turma("Turma A");
            turma.adicionarAluno(new Aluno("João", [7, 8]));

            assert.equal(turma.estaVazia(), false);
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

            assert.equal(aprovados.length, 1);
            assert.equal(aprovados[0], aprovado);
        });
    });

});
