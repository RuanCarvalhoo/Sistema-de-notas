// Dados de exemplo (seed). Separados do código para facilitar troca/remoção.

export const NOMES_TURMAS = [
    "Mouratech Dados",
    "Mouratech Fullstack",
    "Mouratech Automação"
];

// Estrutura simples: { turma: [ [nome, notas], ... ] }
export const ALUNOS_INICIAIS = {
    "Mouratech Dados": [
        ["Peter Parker", [8, 7, 9]],
        ["Bruce Wayne", [9, 8, 8]],
        ["Clark Kent", [6, 7, 5]]
    ],
    "Mouratech Fullstack": [
        ["Tony Stark", [7, 8, 7]],
        ["Steve Rogers", [9, 9, 10]],
        ["Barry Allen", [5, 6, 6]]
    ],
    "Mouratech Automação": [
        ["Bruce Banner", [8, 8, 7]],
        ["Diana Prince", [10, 9, 9]],
        ["Matt Murdock", [6, 5, 7]]
    ]
};
