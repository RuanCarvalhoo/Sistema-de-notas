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

  test('adicionarNota preserva as notas recebidas no construtor', () => {
    const veterano = new Aluno('Joao', [7, 9]);
    veterano.adicionarNota(5);
    expect(veterano.notas).toEqual([7, 9, 5]);
  });

  test('calcularMedia retorna a media de duas notas', () => {
    const maria = new Aluno('Maria', [10, 8]);
    expect(maria.calcularMedia()).toBe(9);

    const joao = new Aluno('Joao', [6, 4]);
    expect(joao.calcularMedia()).toBe(5);

    expect(aluno.calcularMedia()).toBe(0);
  });

  test('estaAprovado indica se o aluno atingiu a media de aprovacao', () => {
    const maria = new Aluno('Maria', [8, 8]);
    expect(maria.estaAprovado()).toBe(true);

    const joao = new Aluno('Joao', [4, 6]);
    expect(joao.estaAprovado()).toBe(false);
  });
});
