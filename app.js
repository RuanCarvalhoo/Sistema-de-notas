// Ponto de entrada (composition root).
// Monta as dependências e inicia a interface. Nada de lógica aqui.

import SistemaDeNotas from "./src/services/SistemaDeNotas.js";
import MenuCLI from "./src/cli/MenuCLI.js";
import { NOMES_TURMAS, ALUNOS_INICIAIS } from "./src/data/dadosIniciais.js";

function criarSistema() {
    const sistema = new SistemaDeNotas(NOMES_TURMAS);

    for (const nomeTurma of NOMES_TURMAS) {
        for (const [nome, notas] of ALUNOS_INICIAIS[nomeTurma]) {
            sistema.cadastrarAluno(nome, notas, nomeTurma);
        }
    }

    return sistema;
}

const sistema = criarSistema();
const menu = new MenuCLI(sistema);

menu.iniciar();
