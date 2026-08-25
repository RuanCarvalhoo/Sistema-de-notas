// Módulo que simula uma API externa de consulta de alunos.
// Os dados ficam isolados aqui para simular uma "base remota".

const alunos = [
    { id: 1, nome: "Peter Parker", turma: "Mouratech Dados" },
    { id: 2, nome: "Tony Stark", turma: "Mouratech Fullstack" },
    { id: 3, nome: "Diana Prince", turma: "Mouratech Automação" }
];

// Simula uma requisição a uma API externa.
// Resolve a Promise se o aluno existir, ou rejeita caso contrário.
export function buscarAluno(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const aluno = alunos.find(aluno => aluno.id === id);

            if (aluno) {
                resolve(aluno);
            } else {
                reject(new Error(`Aluno com id ${id} não encontrado.`));
            }
        }, 1000);
    });
}
