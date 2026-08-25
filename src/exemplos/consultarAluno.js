// Exemplo de consumo da API simulada de alunos.
// Demonstra o uso de .then() para sucesso e .catch() para erro.

import { buscarAluno } from "../api/AlunosAPI.js";

// Id existente: a Promise é resolvida com os dados do aluno.
buscarAluno(1)
    .then(aluno => console.log("Aluno encontrado:", aluno))
    .catch(erro => console.log("Erro:", erro.message));

// Id inexistente: a Promise é rejeitada e o erro é tratado no .catch().
buscarAluno(99)
    .then(aluno => console.log("Aluno encontrado:", aluno))
    .catch(erro => console.log("Erro:", erro.message));
