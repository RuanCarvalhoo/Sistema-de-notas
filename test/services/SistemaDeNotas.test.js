import SistemaDeNotas from '../../src/services/SistemaDeNotas.js';


describe('SistemaDeNotas', () => {
  test('getNomesTurmas retorna os nomes das turmas cadastradas', () => {
    const sistema = new SistemaDeNotas(['1A']);

    expect(sistema.getNomesTurmas()).toEqual(['1A']);
  });


  test('getNomesTurmas retorna todas as turmas cadastradas', () => {
    const sistema = new SistemaDeNotas(['1A', '1B', '2A']);

    expect(sistema.getNomesTurmas()).toEqual(['1A', '1B', '2A']);
  });


  test('getTurma retorna a turma quando ela existe', () => {
    const sistema = new SistemaDeNotas(['1A']);

    const turma = sistema.getTurma('1A');

    expect(turma).not.toBeNull();
    expect(turma.nome).toBe('1A');
  });


  test('getTurma retorna null quando a turma não existe', () => {
    const sistema = new SistemaDeNotas(['1A']);

    expect(sistema.getTurma('2B')).toBeNull();
  });


  test('cadastrarAluno adiciona o aluno à turma informada', () => {
    const sistema = new SistemaDeNotas(['1A']);

    const aluno = sistema.cadastrarAluno('Maria', [8, 9], '1A');
    const turma = sistema.getTurma('1A');

    expect(aluno.nome).toBe('Maria');
    expect(aluno.notas).toEqual([8, 9]);
    expect(turma.alunos).toContain(aluno);
  });
});