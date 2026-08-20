// Camada de interface: MenuCLI
// Cuida do readline e do fluxo de menus. Usa async/await (Promise) no lugar
// do encadeamento de callbacks do código original.

import readline from "readline";
import Relatorio from "./Relatorio.js";

export default class MenuCLI {

    constructor(sistema) {
        this.sistema = sistema;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    perguntar(texto) {
        return new Promise(resolve => this.rl.question(texto, resolve));
    }

    async iniciar() {
        let executando = true;

        while (executando) {
            console.log(`
            ====================================
                SISTEMA DE NOTAS
            ====================================

            1 - Cadastrar aluno
            2 - Analisar turma
            3 - Analítica geral
            4 - Listar alunos
            0 - Sair
            `);

            const opcao = await this.perguntar("Escolha uma opção: ");

            switch (opcao) {
                case "1":
                    await this.cadastrarAluno();
                    break;
                case "2":
                    await this.analisarTurma();
                    break;
                case "3":
                    this.analiticaGeral();
                    break;
                case "4":
                    this.listarAlunos();
                    break;
                case "0":
                    console.log("\nSistema encerrado.");
                    executando = false;
                    break;
                default:
                    console.log("\nOpção inválida.");
            }
        }

        this.rl.close();
    }

    async escolherTurma() {
        const nomes = this.sistema.getNomesTurmas();

        console.log();
        nomes.forEach((nome, i) => console.log(`${i + 1} - ${nome}`));

        const opcao = await this.perguntar("\nEscolha a turma: ");
        const indice = Number(opcao) - 1;

        if (indice < 0 || indice >= nomes.length || isNaN(indice)) {
            console.log("\nTurma inválida.");
            return null;
        }

        return nomes[indice];
    }

    async cadastrarAluno() {
        const nome = await this.perguntar("\nNome do aluno: ");

        const entrada = await this.perguntar(
            "Digite pelo menos 3 notas separadas por espaço: "
        );

        const notas = entrada
            .trim()
            .split(/\s+/)
            .map(Number);

        if (notas.length < 3) {
            console.log("\nÉ necessário informar pelo menos 3 notas.");
            return;
        }

        if (notas.some(isNaN)) {
            console.log("\nDigite apenas valores numéricos para as notas.");
            return;
        }

        const turma = await this.escolherTurma();
        if (!turma) {
            return;
        }

        const aluno = this.sistema.cadastrarAluno(nome, notas, turma);
        console.log(`\nAluno ${aluno.nome} cadastrado com sucesso!`);
    }

    async analisarTurma() {
        const nomeTurma = await this.escolherTurma();
        if (!nomeTurma) {
            return;
        }

        const turma = this.sistema.getTurma(nomeTurma);

        if (turma.estaVazia()) {
            console.log("\nNão existem alunos cadastrados nessa turma.");
            return;
        }

        console.log(Relatorio.analiseTurma(nomeTurma, turma.alunos));
    }

    analiticaGeral() {
        const analises = this.sistema.analisarTodasAsTurmas();

        if (analises.length === 0) {
            console.log("\nNão há alunos cadastrados.");
            return;
        }

        for (const analise of analises) {
            console.log(Relatorio.analitica(analise));
        }
    }

    listarAlunos() {
        const registros = this.sistema.listarTodosOsAlunos();

        if (registros.length === 0) {
            console.log("\nNão há alunos cadastrados.");
            return;
        }

        console.log(Relatorio.listaAlunos(registros));
    }
}
