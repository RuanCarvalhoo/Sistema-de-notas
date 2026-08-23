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


  test('cadastrarAluno lança erro quando a turma não existe', () => {
    const sistema = new SistemaDeNotas(['1A']);

    expect(() => {
      sistema.cadastrarAluno('Maria', [8, 9], '2B');
    }).toThrow('Turma inexistente: 2B');
  });


  test('cadastrarAluno lança erro quando o aluno não tem notas', () => {
    const sistema = new SistemaDeNotas(['1A']);

    expect(() => {
      sistema.cadastrarAluno('João', [], '1A');
    }).toThrow('Aluno deve ter pelo menos uma nota');
  });


  test('cadastrarAluno lança erro quando o aluno não tem nome', () => {
    const sistema = new SistemaDeNotas(['1A']);

    expect(() => {
      sistema.cadastrarAluno('', [8, 9], '1A');
    }).toThrow('Aluno deve ter nome');
  });


  test('cadastrarAluno lança erro quando há nota fora do intervalo 0–10', () => {
    const sistema = new SistemaDeNotas(['1A']);

    expect(() => {
      sistema.cadastrarAluno('Pedro', [8, 11], '1A');
    }).toThrow('Notas devem estar entre 0 e 10');
  });

    test('cadastrarAluno lança erro quando o aluno já existe na turma', () => {
    const sistema = new SistemaDeNotas(['1A']);

    sistema.cadastrarAluno('Ana', [7, 8], '1A');

    expect(() => {
      sistema.cadastrarAluno('Ana', [9, 10], '1A');
    }).toThrow('Aluno já cadastrado na turma: Ana');
  });

    test('cadastrarAluno lança erro quando há nota negativa', () => {
    const sistema = new SistemaDeNotas(['1A']);

    expect(() => {
      sistema.cadastrarAluno('Carlos', [-1, 8], '1A');
    }).toThrow('Notas devem estar entre 0 e 10');
  });

    test('cadastrarAluno lança erro quando o nome tem apenas espaços', () => {
    const sistema = new SistemaDeNotas(['1A']);

    expect(() => {
      sistema.cadastrarAluno('   ', [8, 9], '1A');
    }).toThrow('Aluno deve ter nome');
  });

    test('cadastrarAluno funciona em turma existente mesmo sem alunos', () => {
    const sistema = new SistemaDeNotas(['1A', '2B']);

    const aluno = sistema.cadastrarAluno('Lucas', [10, 9], '2B');
    const turma = sistema.getTurma('2B');

    expect(aluno.nome).toBe('Lucas');
    expect(turma.alunos).toHaveLength(1);
    expect(turma.alunos[0]).toBe(aluno);
  });

    test('cadastrarAluno permite múltiplos alunos na mesma turma', () => {
    const sistema = new SistemaDeNotas(['1A']);

    const aluno1 = sistema.cadastrarAluno('Ana', [8, 9], '1A');
    const aluno2 = sistema.cadastrarAluno('Bruno', [7, 10], '1A');
    const turma = sistema.getTurma('1A');

    expect(turma.alunos).toHaveLength(2);
    expect(turma.alunos).toContain(aluno1);
    expect(turma.alunos).toContain(aluno2);
  });

    test('cadastrarAluno lança erro quando há nota não numérica', () => {
    const sistema = new SistemaDeNotas(['1A']);

    expect(() => {
      sistema.cadastrarAluno('Pedro', [8, 'dez'], '1A');
    }).toThrow('Notas devem ser números');
  });

    test('cadastrarAluno lança erro quando há nota NaN', () => {
    const sistema = new SistemaDeNotas(['1A']);

    expect(() => {
      sistema.cadastrarAluno('Pedro', [8, Number('abc')], '1A');
    }).toThrow('Notas devem ser números');
  });

    test('cadastrarAluno permite mesmo nome em turmas diferentes', () => {
    const sistema = new SistemaDeNotas(['1A', '2B']);

    const aluno1 = sistema.cadastrarAluno('Ana', [8, 9], '1A');
    const aluno2 = sistema.cadastrarAluno('Ana', [7, 10], '2B');

    expect(aluno1.nome).toBe('Ana');
    expect(aluno2.nome).toBe('Ana');

    const turma1A = sistema.getTurma('1A');
    const turma2B = sistema.getTurma('2B');

    expect(turma1A.alunos).toHaveLength(1);
    expect(turma2B.alunos).toHaveLength(1);
  });
});