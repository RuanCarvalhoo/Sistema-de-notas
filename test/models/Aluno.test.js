import Aluno from '../../src/models/Aluno.js';

describe('Aluno', () => {
  let aluno;

  beforeEach(() => {
    aluno = new Aluno('Maria');
  });

  test('adicionarNota adiciona a primeira nota', () => {
    aluno.adicionarNota(8);
    expect(aluno.notas).toEqual([8]);
  });

  test('adicionarNota adiciona uma segunda nota', () => {
    aluno.adicionarNota(8);
    aluno.adicionarNota(6);
    expect(aluno.notas).toEqual([8, 6]);
  });
});
