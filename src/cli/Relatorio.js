// Camada de apresentação: monta as strings dos relatórios.
// Só formata texto — quem imprime é a MenuCLI. Assim a lógica de negócio
// (SistemaDeNotas/Turma/Aluno) fica 100% livre de console.log.

export default class Relatorio {

    static analiseTurma(nomeTurma, alunos) {
        const linhas = [`\n===== ${nomeTurma} =====`];

        for (const aluno of alunos) {
            linhas.push(`
            Aluno: ${aluno.nome}
            Média: ${aluno.calcularMedia().toFixed(2)}
            Situação: ${aluno.getSituacao()}
            -----------------------------`);
        }

        return linhas.join("\n");
    }

    static analitica(analise) {
        return `
        ====================================
        Turma: ${analise.nome}
        ====================================

        Maior média:
        ${analise.alunoMaiorMedia.nome} - ${analise.alunoMaiorMedia.calcularMedia().toFixed(2)}

        Menor média:
        ${analise.alunoMenorMedia.nome} - ${analise.alunoMenorMedia.calcularMedia().toFixed(2)}

        Média geral da turma:
        ${analise.mediaGeral.toFixed(2)}

        Aprovados: ${analise.aprovados}
        Reprovados: ${analise.reprovados}
        `;
            }

    static listaAlunos(registros) {
        const linhas = ["\n===== ALUNOS CADASTRADOS ====="];

        for (const { aluno, turma } of registros) {
            linhas.push(`
            Nome: ${aluno.nome}
            Turma: ${turma}
            Notas: ${aluno.notas.join(", ")}
            -----------------------------`);
                    }

        return linhas.join("\n");
    }
}
