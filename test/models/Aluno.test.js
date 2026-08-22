import { describe, it, expect } from "@jest/globals";

import Aluno from "../../src/models/Aluno.js";

describe("Aluno", () => {

    describe("adicionarNota", () => {
        it("deve adicionar uma nota a lista de notas do aluno", () => {
            const aluno = new Aluno("Maria");

            aluno.adicionarNota(8);

            expect(aluno.notas).toEqual([8]);
        });
    });

});
